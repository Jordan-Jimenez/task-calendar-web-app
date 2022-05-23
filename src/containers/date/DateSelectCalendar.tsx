import { useCallback } from "react";

import { CalendarPicker } from "@mui/x-date-pickers";
import { DateTime } from "luxon";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

import { useCalendar } from "../../context/CalendarProvider";
import CalendarPickerDay from "../../components/CalendarPickerDay";

const DateSelectCalendar = () => {
	const calendar = useCalendar();

	const navigate = useNavigate();

	const handleChange = useCallback(
		(newDate: DateTime | null) => {
			if (!newDate) {
				navigate(`${calendar.viewMode}`);

				return;
			}

			navigate(
				`${calendar.viewMode}/${newDate?.year}/${newDate.month}/${newDate.day}`
			);
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[calendar.viewMode]
	);

	return (
		<CalendarPicker
			date={calendar.focusedDate}
			onChange={(newDate) => handleChange(newDate)}
			renderDay={(day, _, DayComponentProps) => (
				<CalendarPickerDay
					key={day.toISO()}
					day={day}
					DayComponentProps={DayComponentProps}
				/>
			)}
		/>
	);
};

export default observer(DateSelectCalendar);
