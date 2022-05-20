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

import { useApp } from "../../context/AppProvider";
import isToday from "../../core/domain/isToday";

const CalendarViewSwitch = () => {
	const navigate = useNavigate();

	const app = useApp();

	const onChange = useCallback(
		(event: SelectChangeEvent) => {
			if (isToday(app.focusedDate)) {
				navigate(`/${event.target.value}`);

				return;
			}

			navigate(
				`/${event.target.value}/${app.focusedDate.year}/${app.focusedDate.month}/${app.focusedDate.day}`
			);
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[app.focusedDate]
	);

	return (
		<>
			<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
				<InputLabel id="demo-simple-select-helper-label">View</InputLabel>
				<Select
					value={app.viewMode}
					onChange={onChange}
					labelId="demo-simple-select-helper-label"
					label="View"
				>
					<MenuItem value={"month"}>Month</MenuItem>
					<MenuItem value={"week"}>Week</MenuItem>
				</Select>
			</FormControl>
		</>
	);
};

export default observer(CalendarViewSwitch);
