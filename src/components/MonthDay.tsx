import React, { FC, useMemo } from "react";

import makeStyles from "@mui/styles/makeStyles/makeStyles";
import Grid from "@mui/material/Grid/Grid";
import { Box, Theme, Typography } from "@mui/material";
import { DateTime } from "luxon";
import { observer } from "mobx-react-lite";

import isToday from "../core/domain/isToday";
import App from "../stores/App";
import CalendarTaskItem from "./CalendarTaskItem";

interface IStyleProps {
	isToday?: boolean;
}

const useStyles = makeStyles<Theme, IStyleProps>({
	spacing: {
		height: "calc(100% - 20px)",
		width: "100%",
		padding: "10px 0px",
		borderTop: (props) =>
			props.isToday ? "5px solid red" : "1px solid #E0E0E0",

		maxWidth: "100%",
	},
	contentStyle: {
		width: "100%",
		minHeight: "85px",
		maxWidth: "100%",
	},
	header: {
		width: "100%",
		marginBottom: "5px",
	},
	grid: {
		maxWidth: "100%",
		height: "inherit",
		borderLeft: "1px solid #E0E0E0",
		"&:last-child": {
			borderRight: "1px solid #E0E0E0",
		},
		"&:first-child": {
			borderLeft: "none",
		},
		overflow: "hidden",
	},
	tasksContainer: {
		padding: "0px 5px",
		maxWidth: "100%",
	},
});

interface ICalendarItemProps {
	date?: DateTime;
	showWeekday?: boolean;
}

const CalendarItem: FC<ICalendarItemProps> = ({
	date,
	showWeekday = false,
}) => {
	const styles = useStyles({ isToday: isToday(date) });

	const tasks = useMemo(
		() => (date ? App.tasksByDate[date?.startOf("day").toISO()] : []),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[date, App.tasksByDate]
	);

	return (
		<Grid className={styles.grid} item xs>
			<div className={styles.spacing}>
				<div className={styles.contentStyle}>
					<div className={styles.header}>
						{showWeekday && (
							<Typography variant="subtitle2" align="center" mb={1}>
								{date?.weekdayShort.toUpperCase()}
							</Typography>
						)}

						<Typography variant="subtitle2" align="center">
							{date?.day === 1 ? date?.toFormat("LLL d") : date?.day}
						</Typography>
					</div>

					<div className={styles.tasksContainer}>
						{tasks?.map((task) => (
							<Box key={task.id} mb={1}>
								<CalendarTaskItem task={task} />
							</Box>
						))}
					</div>
				</div>
			</div>
		</Grid>
	);
};
export default observer(CalendarItem);
