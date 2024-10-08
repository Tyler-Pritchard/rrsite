// store.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import menuReducer from './reducers/menuReducer';
import userReducer from './reducers/userReducer';
import storage from 'redux-persist/lib/storage';  // Default localStorage for web
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

// Define persist configuration for user reducer
const userPersistConfig = {
  key: 'user',           // Name of the key in storage
  storage,               // Type of storage (localStorage in this case)
  whitelist: ['user'],   // Persist only the 'user' slice of state
};

// Combine reducers with persist configuration for user
const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer), // Persist user slice
  menu: menuReducer,  // No persistence for menu
});

// Custom Middleware for Error Logging
const errorMiddleware = (store: any) => (next: any) => (action: any) => {
  try {
    return next(action);
  } catch (err) {
    console.error('Caught an exception in action:', action.type, err);
    throw err;  // Rethrow the error for visibility
  }
};

const sagaMiddleware = createSagaMiddleware();


// Configure the store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore redux-persist actions in serializable checks
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware, errorMiddleware),
  devTools: process.env.NODE_ENV !== 'production' && {
    name: 'RobRichSite',        // Custom name in DevTools
    trace: true,               // Enable action tracing in DevTools
    traceLimit: 25,            // Limit trace stack to 25 actions for performance
  },
});

sagaMiddleware.run(rootSaga);

// Add persistor for persistence integration
export const persistor = persistStore(store as unknown as any);

// Export RootState and AppDispatch types for use across the app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
