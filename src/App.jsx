import React from "react";
import HomePage from "./pages/HomePage";
import Main from "./layout/Main";
import GuidePage from "./pages/GuidePage";
import { useDispatch } from "react-redux";
import { fetchAuthMe } from "./store/slices/authSlice";
import { Route, Routes } from "react-router-dom";
import TerminalGuidePage from "./pages/TerminalGuidePage";

const App = () => {
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(fetchAuthMe());
	}, []);

	return (
		<React.Fragment>
			<Routes>
				<Route path="/" element={<Main />}>
					<Route path="" element={<HomePage />} />
					<Route path="guide" element={<GuidePage />} />
				</Route>
				<Route path="/guide/terminal" element={<TerminalGuidePage />} />
			</Routes>
		</React.Fragment>
	);
};

export default App;
