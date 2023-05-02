import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import guideSlice from "./slices/guideSlice";

const store = configureStore({
	reducer: {
		auth: authSlice,
		guide: guideSlice,
	},
	devTools: true,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export default store;
