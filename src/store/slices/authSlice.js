import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAuth = createAsyncThunk("auth/fetchAuth", async (params) => {
	const { data } = await axios.post("http://localhost:4001/auth/signin", params);
	return data;
});

export const fetchAuthMe = createAsyncThunk("auth/fetchAuthMe", async () => {
	const { data } = await axios.get("http://localhost:4001/auth/me", {
		headers: {
			Authorization: window.localStorage.getItem("token"),
		},
	});
	return data;
});

const initialState = {
	userData: null,
	status: "loading",
};

const authSlice = createSlice({
	name: "@@auth",
	initialState,
	reducers: {
		signout: (state) => {
			state.status = "received";
			state.userData = null;
		},
	},
	extraReducers: (builder) =>
		builder
			.addCase(fetchAuth.pending, (state) => {
				state.userData = null;
				state.status = "loading";
			})
			.addCase(fetchAuth.rejected, (state) => {
				state.userData = null;
				state.status = "rejected";
			})
			.addCase(fetchAuth.fulfilled, (state, action) => {
				state.userData = action.payload;
				state.status = "received";
			})
			.addCase(fetchAuthMe.pending, (state) => {
				state.userData = null;
				state.status = "loading";
			})
			.addCase(fetchAuthMe.rejected, (state) => {
				state.userData = null;
				state.status = "rejected";
			})
			.addCase(fetchAuthMe.fulfilled, (state, action) => {
				state.userData = action.payload;
				state.status = "received";
			}),
});

export const { signout } = authSlice.actions;

export const selectIsAuth = (state) => Boolean(state.auth.userData);
export const selectUserData = (state) => state.auth.userData;
export default authSlice.reducer;
