import { createStore, combineReducers } from 'redux';
import menuReducer from './reducers/menuReducer';

const rootReducer = combineReducers({
  menu: menuReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
