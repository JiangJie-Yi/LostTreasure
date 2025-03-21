import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inputText: '',
  description: '',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setInputText: (state, action) => {
      state.inputText = action.payload;
    },
  },
});

export const { setDescription, setInputText } = uiSlice.actions;
export default uiSlice.reducer;
