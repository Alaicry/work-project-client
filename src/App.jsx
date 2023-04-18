import React from "react";
import Home from "./pages/HomePage";
import Main from "./layout/Main";
import GuidePage from "./pages/GuidePage";
import TerminalJournalPage from "./pages/TerminalJournalPage";
import { useDispatch } from "react-redux";
import { fetchAuthMe } from "./store/slices/authSlice";
import { Route, Routes } from "react-router-dom";

const App = () => {
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(fetchAuthMe());
	}, []);

	return (
		<React.Fragment>
			<Routes>
				<Route path="/" element={<Main />}>
					<Route path="" element={<Home />} />
					<Route path="guide" element={<GuidePage />} />
				</Route>
				<Route path="/terminal-journal" element={<TerminalJournalPage />} />
			</Routes>
		</React.Fragment>
	);
};

export default App;
