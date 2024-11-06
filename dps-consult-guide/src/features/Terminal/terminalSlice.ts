import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../api';
import { TerminalState, Terminal } from './types';

const initialState: TerminalState = {
  terminals: [],
  selectedTerminal: '',
  loading: false,
  error: null,
};

export const fetchTerminals = createAsyncThunk(
  'terminals/fetchTerminals',
  async () => {
    const response = await apiClient.get('/terminal');
    return response.data.data;
  }
);

const terminalSlice = createSlice({
  name: 'terminals',
  initialState,
  reducers: {
    setSelectedTerminal(state, action) {
      state.selectedTerminal = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTerminals.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTerminals.fulfilled, (state, action) => {
        state.terminals = action.payload.data;
        state.loading = false;
      })
      .addCase(fetchTerminals.rejected, (state, action) => {
        state.error = action.error.message || 'Error fetching terminals';
        state.loading = false;
      });
  },
});

export const { setSelectedTerminal } = terminalSlice.actions;

export default terminalSlice.reducer;
