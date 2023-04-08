import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import theme from "./theme";
import { CSSReset, ChakraProvider } from "@chakra-ui/react";

const App: React.FC = () => {
	return (
		<ChakraProvider theme={theme}>
			<CSSReset />
			<Header />
			<Main />
			<Footer />
		</ChakraProvider>
	);
};

export default App;
