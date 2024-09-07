// store.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import menuReducer from './reducers/menuReducer';
import userReducer from './reducers/userReducer';

// Combine the reducers
const rootReducer = combineReducers({
  user: userReducer,
  menu: menuReducer,
});

// Configure the store
const store = configureStore({
  reducer: rootReducer,
});

// Export RootState and AppDispatch types for use across the app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
