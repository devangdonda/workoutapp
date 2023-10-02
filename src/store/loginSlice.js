import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {isLoggedIn: true},
  reducers: {
    logout: (state) => {
      state.value = false;
    },
    login: (state) => {
      state.value = true;
    }
  },
})

export const loginActions = loginSlice.actions;

export default loginSlice.reducer;