import React from "react";
import { useDispatch } from "react-redux";
import { fetchAuthMe } from "./store/slices/authSlice";
import Header from "./components/Header";

const App = () => {
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(fetchAuthMe());
	}, []);

	return (
		<React.Fragment>
			<Header />
		</React.Fragment>
	);
};

export default App;
