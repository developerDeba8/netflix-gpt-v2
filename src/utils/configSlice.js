import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    selectedLanguage: "en",
  },
  reducers: {
    changeSelectedLanguage: (state, action) => {
      state.selectedLanguage = action.payload;
    },
  },
});

export const { changeSelectedLanguage } = configSlice.actions;
export default configSlice.reducer;
