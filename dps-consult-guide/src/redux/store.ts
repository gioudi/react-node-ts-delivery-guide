import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/Auth/authSlice';
import guideReducer from '../features/Guide/guideSlice';
import terminalReducer from '../features/Terminal/terminalSlice';
import referralReducer from '../features/Referral/referralSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    guide: guideReducer,
    terminals: terminalReducer,
    referral: referralReducer
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
