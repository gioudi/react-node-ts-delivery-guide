import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReferralResponse, Tab } from './types';
import apiClient from '../../api';

interface ReferralState {
  referral: ReferralResponse | null;
  loading: boolean;
  error: string | null;
  tabs: Tab[];
}

const initialState: ReferralState = {
  referral: null,
  loading: false,
  error: null,
  tabs: []
};


export const fetchReferrals = createAsyncThunk(
    'referral/fetchReferrals',
    async (guias: string[], { rejectWithValue }) => {
      try {
        const response = await apiClient.post(`/referral`, { guias });
        return response.data.data.data[0].estado.map((estado: any) => ({
          label: estado.descripcion.toLowerCase(),
          date: `${estado.fecha} ${estado.hora || ''}`,
          status: estado.descripcion.toLowerCase(),
          isError: estado.descripcion === 'Cerrado por incidencia',
        }));
      } catch (error: any) {
        return rejectWithValue(error.message);
      }
    }
  );

  const referralSlice = createSlice({
    name: 'referral',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchReferrals.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchReferrals.fulfilled, (state, action: PayloadAction<Tab[]>) => {
          state.loading = false;
          state.tabs = action.payload;
        })
        .addCase(fetchReferrals.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        });
    },
  });

export default referralSlice.reducer;

