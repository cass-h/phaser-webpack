import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    name: '',
  },
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
      return state;
    },
  },
});

export { gameSlice };
