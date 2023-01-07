import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const livesSlice = createSlice({
  name: 'lives',
  initialState: {
    count: 0,
  },
  reducers: {
    add(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
    reduce(state, action: PayloadAction<number>) {
      state.count -= action.payload;
    },
  },
});

export { livesSlice };
