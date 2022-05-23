import React, { FC, useMemo } from "react";

import { DateTime } from "luxon";
import { Box, Divider, Grid, Stack, Theme, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles/makeStyles";

import isToday from "../core/domain/isToday";
import App from "../stores/App";
import CalendarTaskItem from "./CalendarTaskItem";

interface StyleProps {
	isToday?: boolean;
}

const useStyles = makeStyles<Theme, StyleProps>({
	gridItem: {
		maxWidth: "100%",
		borderRight: "1px solid #E0E0E0",
		overflowX: "hidden",
		"&:last-child": {
			borderRight: "none",
		},
	},
	contentContainer: {
		marginTop: "20px",
		minHeight: "300px",
	},
	header: {
		paddingTop: "15px",
		paddingBottom: "15px",
		borderBottom: (props) => (props.isToday ? "3px solid red" : "none"),
	},
	tasksContainer: {
		padding: "0px 5px",
		maxWidth: "100%",
	},
});

interface IWeekDayProps {
	date?: DateTime;
}

const WeekDay: FC<IWeekDayProps> = React.memo(({ date }) => {
	const styles = useStyles({ isToday: isToday(date) });

	const tasks = useMemo(
		() => (date ? App.tasksByDate[date?.startOf("day").toISO()] : []),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[date, App.tasksByDate]
	);

	return (
		<Grid className={styles.gridItem} item xs>
			<Stack
				direction={"column"}
				divider={<Divider orientation="horizontal" flexItem />}
			>
				<div className={styles.header}>
					<Typography variant="subtitle2" align="center">
						{date?.weekdayShort.toUpperCase()}
					</Typography>

					<Typography variant="subtitle2" align="center">
						{date?.day}
					</Typography>
				</div>

				<div className={styles.contentContainer}>
					<div className={styles.tasksContainer}>
						{tasks?.map((task) => (
							<Box key={task.id} mb={1}>
								<CalendarTaskItem task={task} />
							</Box>
						))}
					</div>
				</div>
			</Stack>
		</Grid>
	);
});

export default WeekDay;
