import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

const loadingReducer = createSlice({
  name: 'loadingReducer',
  initialState,
  reducers: {
    DISPLAY_LOADING: (state, action) => {
      state.isLoading = true;
    },

    HIDE_LOADING: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const { DISPLAY_LOADING, HIDE_LOADING } = loadingReducer.actions;

export default loadingReducer.reducer;

//---------------
