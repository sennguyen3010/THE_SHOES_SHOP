import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './reducers/loadingReducer';
import productReducer from './reducers/productReducer';

export const store = configureStore({
  reducer: {
    productReducer: productReducer,
    loadingReducer: loadingReducer,
  },
});
