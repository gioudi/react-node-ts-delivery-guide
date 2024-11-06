import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiClient from '../../api';
import { GuideState } from './types';

const initialState: GuideState = {
  token: localStorage.getItem('authToken') || null,
  loading: false,
  error: null,
  data: null,
};

export const handleGuideById = createAsyncThunk(
  'guide/handleGuideById',
  async (id: string) => {
    const response = await apiClient.get(`/guide/${id}`);
    return response.data;
  }
);

const guideSlice = createSlice({
  name: 'guide',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(handleGuideById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(handleGuideById.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.loading = false;
      })
      .addCase(handleGuideById.rejected, (state, action) => {
        state.error = action.error.message || 'Error fetching guide';
        state.loading = false;
      });
  },
});

export default guideSlice.reducer;
