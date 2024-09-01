import { combineReducers } from 'redux';
import menuReducer from './menuReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  menu: menuReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
