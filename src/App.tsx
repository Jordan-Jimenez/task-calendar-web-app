import { ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Layout from "./containers/Layout";
import AppProvider from "./context/AppProvider";
import theme from "./core/theme";
import Root from "./pages/Root";

function App() {
	return (
		<AppProvider>
			<LocalizationProvider dateAdapter={AdapterLuxon}>
				<ThemeProvider theme={theme}>
					<BrowserRouter>
						<Routes>
							<Route element={<Layout />}>
								<Route path="/:view/:year/:month/:day" element={<Root />} />
								<Route path="*" element={<Navigate to="/month" replace />} />
								<Route path="/:view" element={<Root />} />
							</Route>
						</Routes>
					</BrowserRouter>
				</ThemeProvider>
			</LocalizationProvider>
		</AppProvider>
	);
}

export default App;
