import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserData = createAsyncThunk("auth/fetchUserData", async (params) => {
	const { data } = await axios.post("http://localhost:4001/auth/signin", params);
	return data;
});

const initialState = {
	userData: null,
	status: "loading",
};

const authSlice = createSlice({
	name: "@@auth",
	initialState,
	reducers: {},
	extraReducers: (builder) =>
		builder
			.addCase(fetchUserData.pending, (state) => {
				state.userData = [];
				state.status = "loading";
			})
			.addCase(fetchUserData.rejected, (state) => {
				state.userData = [];
				state.status = "rejected";
			})
			.addCase(fetchUserData.fulfilled, (state, action) => {
				state.userData = action.payload;
				state.status = "received";
			}),
});

export const {} = authSlice.actions;

export default authSlice.reducer;
