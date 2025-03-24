import { configureStore } from '@reduxjs/toolkit';
import moduleReducer from './slice/module.js';

const store = configureStore({
  reducer: {
    module: moduleReducer,
  },
});

export default store;
