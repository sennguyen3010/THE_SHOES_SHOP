import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { http } from '../../util/config';

const initialState = {
  arrProduct: [],
  productDetail: {},
  productCart: {
    number: 1,
  },
};

const productReducer = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    setArrProductAction: (state, action) => {
      state.arrProduct = action.payload;
    },
    setProductDetail: (state, action) => {
      state.productDetail = action.payload;
    },
    setAmount: (state, action) => {
      state.productCart = action.payload;
    },
  },
});

export const { setArrProductAction, setProductDetail, setAmount } = productReducer.actions;

export default productReducer.reducer;

//-----------------action thunk (api)----------------

export const getProductApi = () => {
  return async (dispatch) => {
    try {
      //call api
      const result = await http.get('/Product');

      const action = setArrProductAction(result.data.content);
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };
};

export const getProductDetailApi = (id) => {
  return async (dispatch) => {
    try {
      const result = await http.get(`/Product/getbyid?id=${id}`);
      const action = setProductDetail(result.data.content);
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };
};
