import { AnyAction, combineReducers } from '@reduxjs/toolkit';
import { resetData } from '../actions';
import { lives } from './lives';
import { game } from './game';
const appReducer = combineReducers({ lives, game });

const rootReducer = (
  state: ReturnType<typeof appReducer>,
  action: AnyAction
) => {
  switch (action.type) {
    case resetData.type:
      state = action.payload;
      return state;
    default:
      return appReducer(state, action);
  }
};
export default rootReducer;
