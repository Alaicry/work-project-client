import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTerminalGuide = createAsyncThunk(
	"@@getTerminalGuide",
	async () => {
		const { data } = await axios.get("http://localhost:4001/devices", {
			headers: {
				Authorization: window.localStorage.getItem("token"),
			},
		});
		return data;
	}
);

export const postTerminalGuide = createAsyncThunk();

const initialState = {
	list: [],
};

const terminalGuideSlice = createSlice({
	name: "@@terminalGuide",
	initialState,
	reducers: {},
	extraReducers: (builder) =>
		builder
			.addCase(getTerminalGuide.pending, (state) => {
				state.list = [];
			})
			.addCase(getTerminalGuide.rejected, (state) => {
				state.list = [];
			})
			.addCase(getTerminalGuide.fulfilled, (state, action) => {
				state.list = action.payload;
			}),
});

export const {} = terminalGuideSlice.actions;

export default terminalGuideSlice.reducer;
