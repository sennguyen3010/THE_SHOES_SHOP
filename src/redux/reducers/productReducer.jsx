import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { http } from '../../util/config';

const initialState = {
  arrProduct: ['abc'],
};

const productReducer = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    setArrProductAction: (state, action) => {
      state.arrProduct = action.payload;
    },
  },
});

export const { setArrProductAction } = productReducer.actions;

export default productReducer.reducer;

//-----------------action thunk (api)----------------

export const getProductApi = () => {
  return async (dispatch) => {
    try {
      //call api
      const result = await http.get('/Product');

      // //lay du lieu ve dua len redux
      // console.log(result);
      const action = setArrProductAction(result.data.content);
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };
};
