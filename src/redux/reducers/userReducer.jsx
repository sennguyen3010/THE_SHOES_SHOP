import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { history } from '../../index.js';
import { ACCESS_TOKEN, getStoreJSON, http, setStore, setStoreJSON, USER_LOGIN } from '../../util/config.jsx';
import { DISPLAY_LOADING, HIDE_LOADING } from './loadingReducer.jsx';

const initialState = {
  userLogin: getStoreJSON(USER_LOGIN),
};

const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setUserLogin: (state, action) => {
      let userLogin = action.payload;
      state.userLogin = userLogin;
    },
  },
});

export const { setUserLogin } = userReducer.actions;

export default userReducer.reducer;

//-------------call api------------------------
export const signupApi = (userSignup) => {
  return async (dispatch) => {
    try {
      let result = await http.post('/Users/signup', userSignup);

      const showLoading = DISPLAY_LOADING();
      dispatch(showLoading);

      //xu ly dang nhap
      let { email, password } = result.data.content;

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

      setStoreJSON(USER_LOGIN, result.data.content);
      setStore(ACCESS_TOKEN, result.data.content.accessToken);

      const action = setUserLogin(result.data.content);
      dispatch(action);

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
        data: token,
      });

      const showLoading = DISPLAY_LOADING();
      dispatch(showLoading);

      setStoreJSON(USER_LOGIN, result.data.content);
      setStore(ACCESS_TOKEN, result.data.content.accessToken);

      const action = setUserLogin(result.data.content);
      dispatch(action);
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

export const getProfileApi = () => {
  return async (dispatch) => {
    try {
      let result = await http.post('/Users/getProfile');

      const action = setUserLogin(result.data.content);
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateProfile = (userUpdate) => {
  return async (dispatch) => {
    try {
      let result = await http.post('/Users/updateProfile', userUpdate);
    } catch (err) {
      console.log(err);
    }
  };
};
