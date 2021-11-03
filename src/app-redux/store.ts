import { configureStore } from '@reduxjs/toolkit';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
// import logger from 'redux-logger';

import userInfoReducer from './slices/userInfoSlice';

const rootReducer = {
    userInfo: userInfoReducer,
};


const store = configureStore({
    reducer: rootReducer,
});


const persistor = persistStore(store);

export { store, persistor };
