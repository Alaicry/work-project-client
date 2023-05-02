import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTerminalData = createAsyncThunk(
	"@@guide/fetch-terminal-data",
	async () => {
		const data = await axios.get("http://localhost:4001/devices", {
			headers: {
				Authorization: window.localStorage.getItem("token"),
			},
		});
		return data;
	}
);

const initialState = {
	list: [],
	status: "loading",
};

const guideSlice = createSlice({
	name: "@@guide",
	initialState,
	reducers: {
		clearData: () => initialState,
	},
	extraReducers: (builder) =>
		builder
			.addCase(fetchTerminalData.pending, (state) => {
				state.list = [];
				state.status = "loading";
			})
			.addCase(fetchTerminalData.rejected, (state) => {
				state.list = [];
				state.status = "rejected";
			})
			.addCase(fetchTerminalData.fulfilled, (state, action) => {
				state.list = action.payload.data;
				state.status = "received";
			}),
});

export const { clearData } = guideSlice.actions;

export default guideSlice.reducer;

// export const selectGuideList = (state) => state.guide.list;
