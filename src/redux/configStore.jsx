import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './reducers/loadingReducer';
import productReducer from './reducers/productReducer';
import userReducer from './reducers/userReducer';

export const store = configureStore({
  reducer: {
    productReducer: productReducer,
    loadingReducer: loadingReducer,
    userReducer: userReducer,
  },
});
