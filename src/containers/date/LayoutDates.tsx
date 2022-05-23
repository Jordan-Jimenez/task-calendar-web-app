import { Theme, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import makeStyles from "@mui/styles/makeStyles/makeStyles";

import { useCalendar } from "../../context/CalendarProvider";
import CalendarViewSelect from "../calendar/CalendarViewSelect";
import DateViewIncrementButtons from "./DateViewIncrementButtons";

const useStyles = makeStyles<Theme>((theme) => ({
	container: {
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",
		width: "100%",
		[theme.breakpoints.down("md")]: {
			justifyContent: "space-between",
		},
	},
}));

const LayoutDates = () => {
	const styles = useStyles();

	const calendar = useCalendar();

	return (
		<div className={styles.container}>
			{calendar.viewMode !== "agenda" && (
				<>
					<DateViewIncrementButtons />

					<Typography mr={2}>
						{calendar.viewMode === "month"
							? calendar.focusedDate.toFormat("LLL yyyy")
							: `${calendar.calendarDates[0][0]?.toFormat(
									"LLL dd"
							  )} - ${calendar.calendarDates[0][6]?.toFormat("LLL dd yyyy")}`}
					</Typography>
				</>
			)}

			<CalendarViewSelect />
		</div>
	);
};

export default observer(LayoutDates);
