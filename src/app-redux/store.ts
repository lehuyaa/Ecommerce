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
import suggestReducer from './slices/suggestionsSlice';
const rootReducer = {
  userInfo: userInfoReducer,
  cart: cartReducer,
  suggest: suggestReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

const persistor = persistStore(store);

export {store, persistor};
