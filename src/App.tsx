import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

const App: React.FC = () => {
	return (
		<React.Fragment>
			<Header />
			<Main />
			<Footer />
		</React.Fragment>
	);
};

export default App;
