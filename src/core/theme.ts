import { createTheme } from "@mui/material/styles";

export default createTheme({
	typography: {
		fontFamily: "Ubuntu",
		subtitle2: {
			fontSize: "12px",
			fontWeight: 300,
			color: "#898989",
		},
	},
	palette: {
		divider: "#E0E0E0",
		primary: {
			main: "#D5E5E2",
			contrastText: "#fff",
		},
		secondary: {
			main: "#FFDF8E",
			contrastText: "#fff",
		},
		info: {
			main: "#F2F2F2",
			contrastText: "#898989",
		},
	},
});
