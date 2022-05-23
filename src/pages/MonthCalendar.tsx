import { Grid } from "@mui/material";
import { observer } from "mobx-react-lite";
import makeStyles from "@mui/styles/makeStyles/makeStyles";

import MonthDay from "../components/MonthDay";
import { useCalendar } from "../context/CalendarProvider";

const useStyles = makeStyles({
	gridItemDay: {
		"&:last-child": {
			borderBottom: "1px solid #E0E0E0",
		},
	},
});

const MonthCalendar = () => {
	const styles = useStyles();

	const calendar = useCalendar();

	return (
		<>
			{calendar.calendarDates.map((week, i) => (
				<Grid className={styles.gridItemDay} key={`week: ${i + 1}`} container>
					{week.map((d) => (
						<MonthDay date={d} showWeekday={i === 0} key={d?.toISO()} />
					))}
				</Grid>
			))}
		</>
	);
};

export default observer(MonthCalendar);
