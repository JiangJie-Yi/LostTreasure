import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  propsName: {
    GRINDING_MACHINE_OPERATION_FILE_1: '砂輪機操作文件',
    GRINDING_MACHINE_OPERATION_FILE_2: '『 豬圈密碼 』',
    GUANYIN_JADE_PENDAND: '觀音玉佩',
  },
  descriptionContent: {
    GRINDING_MACHINE_OPERATION_FILE_FRONT: '感覺像是一張工業安全指導文件',
    GRINDING_MACHINE_OPERATION_FILE_BACK_1: '等等..這是什麼？',
    GRINDING_MACHINE_OPERATION_FILE_BACK_2: '好像在哪看過，似曾相似的...',
    GRINDING_MACHINE_OPERATION_FILE_BACK_3: '像是某種密碼符號',
    GUANYIN_JADE_PENDAND_FRONT: '這是父親遺留下來的傳家寶',
  },
  currentDisplayState: '',
};

const textStringSlice = createSlice({
  name: 'textString',
  initialState,
  reducers: {
    setDisplayState(state, action) {
      state.currentDisplayState = action.payload;
    },
  },
});

export const { setDisplayState } = textStringSlice.actions;
export default textStringSlice.reducer;
