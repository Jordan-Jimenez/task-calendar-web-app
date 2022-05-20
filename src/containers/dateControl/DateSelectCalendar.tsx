import { useCallback } from "react";

import { CalendarPicker } from "@mui/x-date-pickers";
import { DateTime } from "luxon";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

import { useApp } from "../../context/AppProvider";

const DateSelectCalendar = () => {
	const app = useApp();

	const navigate = useNavigate();

	const handleChange = useCallback(
		(newDate: DateTime | null) => {
			if (!newDate) {
				navigate(`${app.viewMode}`);

				return;
			}

			navigate(
				`${app.viewMode}/${newDate?.year}/${newDate.month}/${newDate.day}`
			);
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[app.viewMode]
	);

	return (
		<CalendarPicker
			date={app.focusedDate}
			onChange={(newDate) => handleChange(newDate)}
		/>
	);
};

export default observer(DateSelectCalendar);
