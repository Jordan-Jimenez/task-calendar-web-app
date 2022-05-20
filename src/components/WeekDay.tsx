import React, { FC } from "react";

import { DateTime } from "luxon";
import { Divider, Grid, Stack, Theme, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles/makeStyles";

import isToday from "../core/domain/isToday";

interface StyleProps {
	isToday?: boolean;
}

const useStyles = makeStyles<Theme, StyleProps>({
	gridItem: {
		borderRight: "1px solid #E0E0E0",
		"&:last-child": {
			borderRight: "none",
		},
	},
	contentContainer: {
		minHeight: "300px",
	},
	header: {
		paddingBottom: 15,
		borderBottom: (props) => (props.isToday ? "3px solid red" : "none"),
	},
});

interface IWeekDayProps {
	date?: DateTime;
}

const WeekDay: FC<IWeekDayProps> = React.memo(({ date }) => {
	const styles = useStyles({ isToday: isToday(date) });

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

				<div className={styles.contentContainer}></div>
			</Stack>
		</Grid>
	);
});

export default WeekDay;
