import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk('auth/loginUser', 
async () => {
    const response = await axios.get("http://localhost:3001/");
    return response.data;
});

const UsersSlice = createSlice({
    name: "users",
    initialState: { users: [], status: ''},
    reducers: { },
    extraReducers: {
        [fetchUsers.pending]: (state) => {
            state.status = "Loading";
        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.users = action.payload;
            state.status = "Succes";
        },
        [fetchUsers.rejected]: (state) => {
            state.status = "Failed";
        }
    }
})

export default UsersSlice.reducer;