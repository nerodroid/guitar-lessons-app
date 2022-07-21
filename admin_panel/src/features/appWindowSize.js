import { createSlice } from "@reduxjs/toolkit";

export const appWindowSizeSlice = createSlice({
    name: "appWindowSize",
    initialState: { value: "full" },
    reducers: {
        changeAppWindowSize: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { changeAppWindowSize } = appWindowSizeSlice.actions;

export default appWindowSizeSlice.reducer;