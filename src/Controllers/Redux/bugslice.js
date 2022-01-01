import { createSlice } from "@reduxjs/toolkit";
import { retrieveBugs } from "../bugcontroller";

const slice = createSlice({
  name: "bug",
  initialState: [],
  reducers: {
    getBugs: (state) => retrieveBugs(),

    createBugs: (state, actions) => {},
    updateBug: (state, actions) => {},
    markcomplete: (state, action) => {}
  }
});
export default slice.reducer;
export const { getBugs, createBugs, updateBug, markcomplete } = slice.actions;
