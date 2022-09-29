import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { history } from '../../index.js';
import { ACCESS_TOKEN, getStoreJSON, http, setStore, setStoreJSON, TOKEN_FB, USER_SIGNUP } from '../../util/config.jsx';
import { DISPLAY_LOADING, HIDE_LOADING } from './loadingReducer.jsx';

const initialState = {
  userLogin: {},
};

const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {},
});

export const {} = userReducer.actions;

export default userReducer.reducer;

//-------------call api------------------------
export const signupApi = (userSignup) => {
  return async (dispatch) => {
    try {
      let result = await http.post('/Users/signup', userSignup);

      const showLoading = DISPLAY_LOADING();
      dispatch(showLoading);

      //xu ly dang nhap
      // let { email, password } = getStoreJSON(USER_SIGNUP);
      let { email, password } = result.data.content;

      // console.log({ email, password });

      const action = signinApi({ email, password });
      dispatch(action);

      setTimeout(() => {
        const hideLoading = HIDE_LOADING();
        dispatch(hideLoading);
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  };
};

export const signinApi = (userLogin) => {
  return async (dispatch) => {
    try {
      let result = await http.post('/Users/signin', userLogin);

      const showLoading = DISPLAY_LOADING();
      dispatch(showLoading);

      setStore(ACCESS_TOKEN, result.data.content.accessToken);
      // console.log('abc');

      history.push('/');

      setTimeout(() => {
        const hideLoading = HIDE_LOADING();
        dispatch(hideLoading);
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  };
};

export const signinApiFacebook = (token) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: 'https://shop.cyberlearn.vn/api/Users/facebooklogin',
        method: 'POST',
        data: { facebookToken: token },
      });
      console.log(result);

      setStore(ACCESS_TOKEN, result.data.content.accessToken);
    } catch (err) {
      console.log(err);
    }
  };
};
