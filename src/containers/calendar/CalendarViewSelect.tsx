import { useCallback } from "react";

import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { useCalendar } from "../../context/CalendarProvider";
import isToday from "../../core/domain/isToday";

const CalendarViewSwitch = () => {
	const navigate = useNavigate();

	const calendar = useCalendar();

	const onChange = useCallback(
		(event: SelectChangeEvent) => {
			if (isToday(calendar.focusedDate)) {
				navigate(`/${event.target.value}`);

				return;
			}

			navigate(
				`/${event.target.value}/${calendar.focusedDate.year}/${calendar.focusedDate.month}/${calendar.focusedDate.day}`
			);
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[calendar.focusedDate]
	);

	return (
		<>
			<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
				<InputLabel id="demo-simple-select-helper-label">View</InputLabel>
				<Select
					value={calendar.viewMode}
					onChange={onChange}
					labelId="demo-simple-select-helper-label"
					label="View"
				>
					<MenuItem value={"agenda"}>Agenda</MenuItem>
					<MenuItem value={"month"}>Month</MenuItem>
					<MenuItem value={"week"}>Week</MenuItem>
				</Select>
			</FormControl>
		</>
	);
};

export default observer(CalendarViewSwitch);
