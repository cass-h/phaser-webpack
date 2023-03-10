import Phaser, { Scale } from 'phaser';
import './styles.scss';
import store from './redux/store';
import { add } from './redux/slices/lives';
import { playerDeath, loadGame, saveGame } from './redux/actions';
import { setName } from './redux/slices/game';

class SceneComponent extends Phaser.Scene {
  ts: Phaser.GameObjects.TileSprite;
  preload() {
    this.load.setBaseURL('https://labs.phaser.io');

    this.load.image('sky', 'assets/skies/space3.png');
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    this.load.image('red', 'assets/particles/red.png');
  }
  create() {
    this.ts = this.add.tileSprite(
      screen.width / 2,
      screen.height / 2,
      screen.width,
      screen.height,
      'sky'
    );

    const particles = this.add.particles('red');

    const emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD',
    });
    this.scale.displaySize.setAspectRatio(16 / 9);
    this.scale.refresh();
    const logo = this.physics.add.image(400, 100, 'logo');

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);
    const toggleFullscreen = () => {
      !this.scale.isFullscreen
        ? this.scale.startFullscreen()
        : this.scale.stopFullscreen();
    };
    const FKey = this.input.keyboard.addKey('F');
    const SKey = this.input.keyboard.addKey('S');
    const LKey = this.input.keyboard.addKey('L');

    const MinusKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.NUMPAD_SUBTRACT
    );

    const PlusKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.NUMPAD_ADD
    );
    store.dispatch(setName('TestName'));
    FKey.on('down', toggleFullscreen, this);
    MinusKey.on(
      'down',
      () => {
        store.dispatch(playerDeath());
      },
      this
    );

    PlusKey.on(
      'down',
      () => {
        store.dispatch(add(1));
      },
      this
    );

    SKey.on(
      'down',
      () => {
        store.dispatch(saveGame());
      },
      this
    );
    LKey.on(
      'down',
      () => {
        store.dispatch(loadGame());
      },
      this
    );

    const gameOverText = this.add
      .text(120, screen.height / 2, "Game Over\npress 'L' to load")
      .setOrigin(0, 0)
      .setFontSize(42)
      .setVisible(false)
      .setActive(false);
    store.subscribe(() => {
      gameOverText.setVisible(store.getState().game.over);
    });
  }
  update() {
    this.ts.tilePositionX = (this.ts.tilePositionX + 0.1) % this.ts.width;
  }

  constructor() {
    super('demo-scene');
  }
}

const phaserRoot = document.getElementById('phaser');
const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: phaserRoot,
  dom: {
    createContainer: true,
  },
  physics: {
    default: 'arcade',
    arcade: { gravity: { x: 0, y: 0 } },
  },
  scale: {
    autoRound: true,
    mode: Scale.ScaleModes.FIT,
  },
  scene: [SceneComponent],
};

const game = new Phaser.Game(config);
