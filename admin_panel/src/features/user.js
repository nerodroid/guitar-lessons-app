import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: { 
        token: null,
        userInfo: null
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setUserInfo: (state, action) => {
            state.userInfo = action.payload;
        },
    }
})

export const { setToken, setUserInfo } = userSlice.actions;

export default userSlice.reducer;