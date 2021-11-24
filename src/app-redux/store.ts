import {configureStore} from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import logger from 'redux-logger';

import userInfoReducer from './slices/userInfoSlice';
import cartReducer from './slices/cartSlice';
const rootReducer = {
  userInfo: userInfoReducer,
  cart: cartReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

const persistor = persistStore(store);

export {store, persistor};
