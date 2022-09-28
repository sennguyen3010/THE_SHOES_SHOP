import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ACCESS_TOKEN, http, setStore, setStoreJSON, TOKEN_FB, USER_SIGNUP } from '../../util/config.jsx';

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

      console.log(result.data.content);

      setStoreJSON(USER_SIGNUP, result.data.content);
    } catch (err) {
      console.log(err);
    }
  };
};

export const signinApi = (userLogin) => {
  return async (dispatch) => {
    try {
      let result = await http.post('/Users/signin', userLogin);

      setStore(ACCESS_TOKEN, result.data.content.accessToken);
      alert('finish');
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
