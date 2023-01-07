import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slices';
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware();

    return middleware;
  },
});
export type RootDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
