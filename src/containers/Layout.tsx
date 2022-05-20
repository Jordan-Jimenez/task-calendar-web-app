import React from "react";

import Container from "@mui/material/Container/Container";
import { Outlet } from "react-router-dom";
import makeStyles from "@mui/styles/makeStyles/makeStyles";
import { Box, Hidden, Theme, Typography } from "@mui/material";

import LayoutDates from "./dateControl/LayoutDates";
import DateSelectCalendarMode from "./dateControl/DateSelectCalendarMode";
import DateSelectDrawerButton from "./dateControl/DateSelectDrawerButton";
import NewTaskButton from "./task/NewTaskButton";
import taskCalendar from "../core/imgs/taskCalendar.png";

const useStyles = makeStyles<Theme>((theme) => ({
	layout: {
		display: "flex",
		flexDirection: "row",
		alignItems: "flex-start",
		minHeight: "100%",
		[theme.breakpoints.down("md")]: {
			flexDirection: "column",
		},
	},
	page: {
		width: "-webkit-fill-available",
	},
	appBar: {
		maxWidth: "fit-content",
		marginRight: "50px",
		paddingTop: "20px",
		[theme.breakpoints.down("md")]: {
			marginRight: 0,
		},
	},
	logo: {
		backgroundImage: `url(${taskCalendar})`,
		width: "50px",
		height: "50px",
		backgroundSize: "cover",
		backgroundPositionY: "center",
		backgroundRepeat: "no-repeat",
		marginRight: "20px",
	},
	brand: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		marginBottom: theme.spacing(5),
		[theme.breakpoints.down("md")]: {
			marginBottom: theme.spacing(2),
		},
	},
}));

const Layout = React.memo(() => {
	const styles = useStyles();

	return (
		<Container>
			<div className={styles.layout}>
				<div className={styles.appBar}>
					<div className={styles.brand}>
						<div className={styles.logo} />
						<Typography margin={0} variant="h6">
							Task Calendar
						</Typography>
					</div>
					<DateSelectCalendarMode />
				</div>

				<div className={styles.page}>
					<Box
						display="flex"
						alignItems="center"
						justifyContent="space-between"
						mb={2}
					>
						<Box display="flex" alignItems="center">
							<Hidden mdUp={true}>
								<DateSelectDrawerButton />
							</Hidden>

							<NewTaskButton />
						</Box>

						<LayoutDates />
					</Box>
					<Outlet />
				</div>
			</div>
		</Container>
	);
});

export default Layout;
