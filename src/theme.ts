import { mode } from "@chakra-ui/theme-tools";
import { ThemeConfig, extendTheme } from "@chakra-ui/react";

const config: ThemeConfig = {
	initialColorMode: "dark",
	useSystemColorMode: true,
};

const theme = extendTheme({
	config,

	fonts: {
		body: `'Montserrat', sans-serif`,
	},
	styles: {
		global: (props: any) => ({
			body: {
				bg: mode("#f9c0a0", "#2b2b2b")(props),
			},
			a: {
				_hover: {
					textDecoration: "none",
				},
			},
		}),
	},
});

export default theme;
