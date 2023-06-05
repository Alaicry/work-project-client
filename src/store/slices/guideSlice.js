import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDevicesData = createAsyncThunk(
	"@@guide/fetch-terminal-get-data",
	async (params) => {
		const data = await axios.get(
			`http://localhost:4001/devices?type=${
				params === "sensors" ? "sensors" : "terminals"
			}`,
			{
				headers: {
					Authorization: window.localStorage.getItem("token"),
				},
			}
		);
		return data;
	}
);

export const fetchAddDevice = createAsyncThunk(
	"@@guide/fetch-terminal-add-data",
	async (params) => {
		const data = await axios.post("http://localhost:4001/devices", params, {
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
			.addCase(fetchDevicesData.pending, (state) => {
				state.list = [];
				state.status = "loading";
			})
			.addCase(fetchDevicesData.rejected, (state) => {
				state.list = [];
				state.status = "rejected";
			})
			.addCase(fetchDevicesData.fulfilled, (state, action) => {
				state.list = action.payload.data;
				state.status = "received";
			})
			.addCase(fetchAddDevice.pending, (state) => {
				state.list = [];
				state.status = "loading";
			})
			.addCase(fetchAddDevice.rejected, (state) => {
				state.list = [];
				state.status = "rejected";
			})
			.addCase(fetchAddDevice.fulfilled, (state, action) => {
				[...state.list, action.payload];
				state.status = "received";
			}),
});

export const { clearData } = guideSlice.actions;

export default guideSlice.reducer;

