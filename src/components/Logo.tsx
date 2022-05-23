import React from "react";

import { Theme } from "@mui/material";
import Typography from "@mui/material/Typography/Typography";
import makeStyles from "@mui/styles/makeStyles/makeStyles";

import taskCalendar from "../core/imgs/taskCalendar.png";

const useStyles = makeStyles<Theme>((theme) => ({
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

const Logo = React.memo(() => {
	const styles = useStyles();

	return (
		<div className={styles.brand}>
			<div className={styles.logo} />
			<Typography margin={0} variant="h6">
				Task Calendar
			</Typography>
		</div>
	);
});

export default Logo;
