import { Box, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";

import { useApp } from "../../context/AppProvider";
import CalendarViewSelect from "../calendar/CalendarViewSelect";
import DateViewIncrementButtons from "./DateViewIncrementButtons";

const LayoutDates = () => {
	const app = useApp();

	return (
		<Box display="flex" justifyContent="flex-end" alignItems="center">
			<DateViewIncrementButtons />

			<Typography mr={2}>
				{app.viewMode === "month"
					? app.focusedDate.toFormat("LLL yyyy")
					: `${app.focusedDateRange[0][0]?.toFormat(
							"LLL dd"
					  )} - ${app.focusedDateRange[0][6]?.toFormat("LLL dd yyyy")}`}
			</Typography>
			<CalendarViewSelect />
		</Box>
	);
};

export default observer(LayoutDates);
