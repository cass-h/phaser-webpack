import { gameSlice } from './game.slice';

const { setName } = gameSlice.actions;

const game = gameSlice.reducer;

export { game, setName };
