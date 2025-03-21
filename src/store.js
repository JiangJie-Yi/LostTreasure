import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './slice/uiSlice';

const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
});

export default store;
