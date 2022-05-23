import { Grid } from "@mui/material";
import { observer } from "mobx-react-lite";

import WeekDay from "../components/WeekDay";
import { useCalendar } from "../context/CalendarProvider";

const WeekCalendar = () => {
	const calendar = useCalendar();

	return (
		<>
			{calendar.calendarDates.map((week, i) => (
				<Grid key={`week: ${i + 1}`} container>
					{week.map((d) => (
						<WeekDay date={d} key={d?.toISO()} />
					))}
				</Grid>
			))}
		</>
	);
};

export default observer(WeekCalendar);
