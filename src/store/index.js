import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import terminalGuideSlice from "./slices/terminalGuideSlice";

const store = configureStore({
	reducer: {
		auth: authSlice,
		terminalGuide: terminalGuideSlice,
	},
	devTools: true,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export default store;
