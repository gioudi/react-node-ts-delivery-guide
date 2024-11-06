import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthState, Login } from './types';
import apiClient from '../../api';

const initialState: AuthState = {
  token: localStorage.getItem('authToken') || null,
  loading: false,
  error: null,
  isLogged: false,
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('authToken');
};

export const handleLogin = createAsyncThunk(
  'auth/login',
  async (payload: Login) => {
    const response = await apiClient.post('/auth/login', payload);
    return response.data;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.token = null;
      state.isLogged = false;
      localStorage.removeItem('authToken');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(handleLogin.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.isLogged = true;
        state.loading = false;
        localStorage.setItem('authToken', action.payload.token);
      })
      .addCase(handleLogin.rejected, (state, action) => {
        state.error = action.error.message || 'Login failed';
        state.loading = false;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
