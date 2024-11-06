import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/Auth/authSlice';
import guideReducer from '../features/Guide/guideSlice';
import terminalReducer from '../features/Terminal/terminalSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    guide: guideReducer,
    terminals: terminalReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
