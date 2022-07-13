import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Auth = {
  email: string;
  password: string;
};

type AuthState = {
  info: Auth;
};

const initialState: AuthState = {
  info: { email: '', password: '' },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserEmail(state, action: PayloadAction<string>) {
      state.info = {
        ...state.info,
        email: action.payload,
      };
    },
    setUserPassword(state, action: PayloadAction<string>) {
      state.info = {
        ...state.info,
        password: action.payload,
      };
    },
  },
});

export const { setUserEmail, setUserPassword } = authSlice.actions;
export default authSlice.reducer;
