import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { reduce } from './slices/lives';
import store, { RootState } from './store';

//#region Game Actions
const playerDeath = createAsyncThunk('die', async () => {
  if (store.getState().lives.count < 1) {
    store.dispatch(await gameOver());
  } else {
    store.dispatch(reduce(1));
  }
});
const gameOver = createAction<void>('gameOver');
//#endregion

//#region Data Actions
const loadGame = createAsyncThunk('loadGame', async () => {
  const storage = localStorage.getItem(store.getState().game.name);
  const object = storage ? JSON.parse(storage) : null;
  store.dispatch(resetData(object));
  return store.getState();
});
const saveGame = createAsyncThunk('saveGame', async () => {
  const storage = JSON.stringify(store.getState());
  localStorage.setItem(store.getState().game.name, storage);
  return store.getState();
});
const resetData = createAction<RootState>('resetData');

//#endregion
export { resetData, playerDeath, gameOver, loadGame, saveGame };
