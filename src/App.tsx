import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import theme from "./theme";
import { ChakraBaseProvider } from "@chakra-ui/react";

const App: React.FC = () => {
	return (
		<ChakraBaseProvider theme={theme} resetCSS={true}>
			<Header />
			<Main />
			<Footer />
		</ChakraBaseProvider>
	);
};

export default App;
