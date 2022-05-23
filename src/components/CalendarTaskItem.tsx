import React, { FC, useCallback } from "react";

import { Button, Theme, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles/makeStyles";
import { useNavigate } from "react-router-dom";

import { TaskInfo } from "../stores/App";

interface StyleParms {
	completed: boolean;
	agenda: boolean;
}

const useStyles = makeStyles<Theme, StyleParms>({
	container: {
		maxWidth: "100%",
		textTransform: "none",
		overflowX: "clip",
		textOverflow: "ellipsis",
		whiteSpace: "nowrap",
		justifyContent: (props) => (props.agenda ? "flex-start" : "center"),
		opacity: (props) => (props.completed ? "0.25" : "1"),
	},
	text: {
		textDecoration: (props) => (props.completed ? "line-through" : "none"),
	},
});

interface ICalendarTaskItemProps {
	task: TaskInfo;
	agenda?: boolean;
}

const CalendarTaskItem: FC<ICalendarTaskItemProps> = React.memo(
	({ task, agenda = false }) => {
		const styles = useStyles({ completed: task.complete, agenda });

		const navigate = useNavigate();

		const viewTask = useCallback(() => {
			navigate(
				{
					pathname: window.location.pathname,
					search: `?task=${task.id}`,
				},
				{ replace: true }
			);

			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, []);

		return (
			<Button
				variant={agenda ? "text" : "contained"}
				fullWidth
				color="primary"
				className={styles.container}
				onClick={viewTask}
				style={{
					WebkitJustifyContent: agenda ? "flex-start" : "center",
					justifyContent: agenda ? "flex-start" : "center",
				}}
			>
				<Typography
					className={styles.text}
					variant={agenda ? "body2" : "caption"}
					noWrap
				>
					{task.title}
				</Typography>
			</Button>
		);
	}
);

export default CalendarTaskItem;
