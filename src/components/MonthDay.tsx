import React, { FC } from "react";

import makeStyles from "@mui/styles/makeStyles/makeStyles";
import Grid from "@mui/material/Grid/Grid";
import { Theme, Typography } from "@mui/material";
import { DateTime } from "luxon";

import isToday from "../core/domain/isToday";

interface IStyleProps {
	isToday?: boolean;
}

const useStyles = makeStyles<Theme, IStyleProps>({
	spacing: {
		height: "calc(100% - 20px)",
		width: "100%",
		padding: "10px 0px",
		border: "1px solid #E0E0E0",
		borderRight: "none",
		borderBottom: "none",
		borderTop: (props) =>
			props.isToday ? "5px solid red" : "1px solid #E0E0E0",
	},
	contentStyle: {
		width: "100%",
		minHeight: "85px",
	},
	header: {
		width: "100%",
	},
	grid: {
		height: "inherit",
		"&:last-child": {
			borderRight: "1px solid #E0E0E0",
		},
	},
});

interface ICalendarItemProps {
	date?: DateTime;
	showWeekday?: boolean;
}

const CalendarItem: FC<ICalendarItemProps> = React.memo(
	({ date, showWeekday = false }) => {
		const styles = useStyles({ isToday: isToday(date) });

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
					</div>
				</div>
			</Grid>
		);
	}
);

export default CalendarItem;
