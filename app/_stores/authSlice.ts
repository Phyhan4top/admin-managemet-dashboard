import { PayloadAction } from '@reduxjs/toolkit';
import { createAppSlice } from './createAppSlice';
import { User } from '../types/user.api';

export interface AuthSliceState {
  email: string;
  account: User | null;
}

const initialState: AuthSliceState = {
  email: '',
  account: null,
};

// If you are not using async thunks you can use the standalone `createSlice`.
export const authSlice = createAppSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: (create) => ({
    // Use the `PayloadAction` type to declare the contents of `action.payload`
    setEmail: create.reducer((state, action: PayloadAction<string>) => {
      state.email = action.payload;
    }),
    setUser: create.reducer((state, action: PayloadAction<User>) => {
      state.account = action.payload;
    }),
    logOut: create.reducer((state) => {
      state.account = null;
    }),
  }),

  selectors: {
    selectEmail: (state) => state.email,
  },
});

export const { setEmail, logOut, setUser } = authSlice.actions;

export const { selectEmail } = authSlice.selectors;
