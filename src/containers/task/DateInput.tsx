import { useCallback, useEffect } from "react";

import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { DateTime } from "luxon";
import { observer } from "mobx-react-lite";
import { useSearchParams } from "react-router-dom";

import { useCalendar } from "../../context/CalendarProvider";
import { useTask } from "../providers/TaskProvider";

const DateInput = () => {
	const task = useTask();

	const calendar = useCalendar();

	const searchParams = useSearchParams()[0];

	useEffect(() => {
		const editing = searchParams.get("edit");

		if (editing !== "true") {
			setDate(calendar.focusedDate);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [calendar.focusedDate]);

	const setDate = useCallback((val?: DateTime | null) => {
		task.setDueDate(val);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<DatePicker
			label="Due By"
			value={task.dueDate}
			onChange={setDate}
			renderInput={(params) => <TextField {...params} variant="outlined" />}
		/>
	);
};

export default observer(DateInput);
