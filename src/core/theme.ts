import { createTheme } from "@mui/material/styles";

export default createTheme({
	typography: {
		fontFamily: "Ubuntu",
		subtitle1: {
			fontSize: "16px",
			color: "#898989",
		},
		subtitle2: {
			fontSize: "12px",
			fontWeight: 300,
			color: "#898989",
		},
		caption: {
			fontSize: "11px",
		},
	},
	palette: {
		divider: "#E0E0E0",
		info: {
			main: "#898989",
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					minWidth: "0px",
					textTransform: "none",
				},
			},
		},
	},
});
