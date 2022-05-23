import { observer } from "mobx-react-lite";
import Grid from "@mui/material/Grid/Grid";

import { useCalendar } from "../context/CalendarProvider";
import WeekDay from "./WeekDay";
import MonthDay from "./MonthDay";

const Calendar = () => {
	const calendar = useCalendar();

	return (
		<>
			{calendar.calendarDates.map((week, i) => (
				<Grid key={`week: ${i + 1}`} container>
					{week.map((d) => {
						return (
							<>
								{calendar.viewMode === "week" ? (
									<WeekDay key={d?.toISO()} date={d} />
								) : (
									<MonthDay date={d} showWeekday={i === 0} key={d?.toISO()} />
								)}
							</>
						);
					})}
				</Grid>
			))}
		</>
	);
};

export default observer(Calendar);
