import { livesSlice } from './lives.slice';
const { add, reduce } = livesSlice.actions;
const lives = livesSlice.reducer;
export { lives, add, reduce };
