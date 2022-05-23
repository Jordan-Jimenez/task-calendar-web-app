import { observer } from "mobx-react-lite";
import { DateTime } from "luxon";
import { Box, Grid, Typography } from "@mui/material";

import isToday from "../core/domain/isToday";
import App from "../stores/App";
import CalendarTaskItem from "../components/CalendarTaskItem";

const TaskAgenda = () => {
	return (
		<Box p={3}>
			{Object.values(App.tasksByDate)
				.map((date) => date.filter((task) => !task.complete))
				.filter((date) => date.length > 0)
				.map((date) => {
					const d = DateTime.fromISO(date[0]?.dueDate);

					return (
						<Grid container key={date[0]?.dueDate} mb={3}>
							<Grid item xs={2} xl={2}>
								{isToday(d) ? (
									<Typography>Today</Typography>
								) : (
									<>
										<Typography>{d.toFormat("LLL d")}</Typography>
										<Typography variant="caption">
											{d.toFormat("yyyy")}
										</Typography>
									</>
								)}
							</Grid>

							<Grid item xs={10} xl={10}>
								{date.map((task) => (
									<Box key={task.id} mb={1}>
										<CalendarTaskItem agenda task={task} />
									</Box>
								))}
							</Grid>
						</Grid>
					);
				})}
		</Box>
	);
};

export default observer(TaskAgenda);
