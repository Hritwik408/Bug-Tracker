import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: [{}],
  reducers: {
    getUser: (state) => {
      state.push({ name: "hritwik verma" });
      state.push({ name: "hrits user" });
    }
  }
});
export default slice.reducer;
export const { getUser } = slice.actions;
