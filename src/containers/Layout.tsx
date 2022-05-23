import { Outlet } from "react-router-dom";
import makeStyles from "@mui/styles/makeStyles/makeStyles";
import { Box, Hidden, Theme } from "@mui/material";
import { observer } from "mobx-react-lite";

import LayoutDates from "./date/LayoutDates";
import DateSelectCalendarMode from "./date/DateSelectCalendarMode";
import DateSelectDrawerButton from "./date/DateSelectDrawerButton";
import AddTaskButton from "./task/AddTaskButton";
import TaskDialog from "./task/TaskDialog";
import Logo from "../components/Logo";
import { useCalendar } from "../context/CalendarProvider";

interface StyleProps {
	viewMode: "week" | "month" | "agenda";
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
	layout: {
		display: "flex",
		flexDirection: "row",
		alignItems: "flex-start",
		height: "calc(100% - 40px)",
		[theme.breakpoints.down("md")]: {
			flexDirection: "column",
		},
	},
	page: {
		width: "-webkit-fill-available",
	},
	appBar: {
		height: "100%",
		maxWidth: "fit-content",
		padding: "20px 25px 20px 20px",
		borderRight: `1px solid ${theme.palette.divider}`,
		[theme.breakpoints.down("md")]: {
			height: "fit-content",
			padding: "20px 20px 0px",
			borderRight: "none",
			marginRight: 0,
		},
	},
	pageHeader: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		padding: "10px 20px 10px 25px",
		borderBottom: (props) =>
			props.viewMode === "month"
				? "none"
				: `1px solid ${theme.palette.divider}`,
		[theme.breakpoints.down("md")]: {
			padding: "10px 10px",
			display: "block",
		},
	},
}));

const Layout = () => {
	const calendar = useCalendar();

	const styles = useStyles({ viewMode: calendar.viewMode });

	return (
		<div className={styles.layout}>
			<div className={styles.appBar}>
				<Logo />

				<DateSelectCalendarMode />
			</div>

			<div className={styles.page}>
				<div className={styles.pageHeader}>
					<Box display="flex" alignItems="center">
						<Hidden mdUp={true}>
							<DateSelectDrawerButton />
						</Hidden>

						<AddTaskButton />
					</Box>

					<LayoutDates />
				</div>

				<Outlet />
			</div>

			<TaskDialog />
		</div>
	);
};

export default observer(Layout);
