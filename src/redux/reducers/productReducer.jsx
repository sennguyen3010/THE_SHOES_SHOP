import { createSlice, current } from '@reduxjs/toolkit';
import axios from 'axios';
import { getStoreJSON, http, PRODUCT_CART, setStoreJSON } from '../../util/config';

const initialState = {
  arrProduct: [],
  productDetail: {},
  orderDetail: [
    {
      productId: '',
      quantity: 0,
    },
  ],

  arrOrder: getStoreJSON(PRODUCT_CART) || [],
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
      const value = action.payload;

      if (value) {
        state.productDetail.number += 1;
      } else {
        if (state.productDetail.number >= 1) {
          state.productDetail.number -= 1;
        }
      }
    },

    setAmountCart: (state, action) => {
      const { masp, value } = action.payload;

      let index = state.arrOrder.findIndex((item) => item.id == masp);
      if (value) {
        state.arrOrder[index].number += 1;
      } else {
        if (state.arrOrder[index].number >= 1) {
          state.arrOrder[index].number -= 1;
        }
      }
    },

    setAddToCart: (state, action) => {
      const productOrder = action.payload;

      let index = state.arrOrder.findIndex((product) => product.id === productOrder.id);
      if (index !== -1) {
        state.arrOrder[index].number += state.productDetail.number;
      } else {
        state.arrOrder.push(productOrder);
      }

      console.log(current(state.arrOrder));
      setStoreJSON(PRODUCT_CART, state.arrOrder);
    },
  },
});

export const { setArrProductAction, setProductDetail, setAmount, setAmountCart, setAddToCart } = productReducer.actions;

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
      const action = setProductDetail({ ...result.data.content, number: 1 });
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };
};
