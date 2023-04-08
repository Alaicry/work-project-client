import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	config: {
		initialColorMode: "dark",
		useSystemColorMode: true,
	},
	fonts: {
		body: `'Montserrat', sans-serif`,
	},
});

export default theme;
