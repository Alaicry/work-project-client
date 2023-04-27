import React from "react";
import Home from "./pages/Home";
import Guide from "./pages/Guide";
import Header from "./components/Header";
import Container from "./components/Container";
import TerminalGuide from "./pages/TerminalGuide";
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
			<Header />
			<Container>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/guide" element={<Guide />} />
					<Route path="/guide/terminal" element={<TerminalGuide />} />
				</Routes>
			</Container>
		</React.Fragment>
	);
};

export default App;
