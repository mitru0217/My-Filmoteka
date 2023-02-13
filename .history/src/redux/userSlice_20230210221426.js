import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   email: null,
//   token: null,
//   id: null,
// };
const initialState = {
  user: { email: null, id: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user.email = action.payload.email;
      state.user.id = action.payload.id;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    removeUser(state) {
      state.user.email = null;
      state.token = null;
      state.user.id = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
