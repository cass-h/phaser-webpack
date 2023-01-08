import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { gameOver } from '../../actions';

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    name: '',
    over: false,
  },
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(gameOver.type, (state, action) => {
      state.over = true;
    });
  },
});

export { gameSlice };
