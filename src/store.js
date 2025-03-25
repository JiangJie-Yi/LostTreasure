import { configureStore } from '@reduxjs/toolkit';
import moduleReducer from './slice/module.js';
import textStringReducer from './slice/textStringSlice.js';

const store = configureStore({
  reducer: {
    module: moduleReducer,
    textString: textStringReducer
  },
});

export default store;
