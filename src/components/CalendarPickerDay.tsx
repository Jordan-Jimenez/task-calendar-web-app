import { FC, useMemo } from "react";

import { Badge } from "@mui/material";
import { PickersDay, PickersDayProps } from "@mui/x-date-pickers";
import { DateTime } from "luxon";
import { observer } from "mobx-react-lite";

import App from "../stores/App";

interface ICalendarPickerDayProps {
	day: DateTime;
	DayComponentProps: PickersDayProps<DateTime>;
}

const CalendarPickerDay: FC<ICalendarPickerDayProps> = ({
	day,
	DayComponentProps,
}) => {
	const hasTasks = useMemo(() => {
		const tasks = (App.tasksByDate[day.startOf("day").toISO()] || []).filter(
			(task) => !task.complete
		);

		if (tasks && tasks.length > 0) {
			return true;
		}

		return false;
	}, [day]);

	return (
		<Badge
			variant="dot"
			overlap="circular"
			color="error"
			invisible={!hasTasks}
			badgeContent=" "
		>
			<PickersDay {...DayComponentProps} />
		</Badge>
	);
};

export default observer(CalendarPickerDay);
