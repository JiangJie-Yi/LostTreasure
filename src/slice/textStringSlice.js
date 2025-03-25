import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  props: {
    OBJECT_NAME: '砂輪機操作文件',
  },
  descriptionContent: {
    OBJECT_FRONT: '工業安全指導文件',
    OBJECT_BACK: '『 共濟會密碼符號 』',
  },
};

const textStringSlice = createSlice({
  name: 'textString',
  initialState,
});


export default textStringSlice.reducer;
