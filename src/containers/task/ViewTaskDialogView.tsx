import { Box, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import EventNoteIcon from "@mui/icons-material/EventNote";

import { useTask } from "../providers/TaskProvider";
import DeleteTaskButton from "./DeleteTaskButton";
import EditTaskButton from "./EditTaskButton";
import SetTaskCompleteButton from "./SetTaskCompleteButton";

const ViewTaskDialogView = () => {
	const task = useTask();

	return (
		<Box display="flex" alignItems="flex-start">
			<div>
				<Typography variant="h6">{task.title}</Typography>

				<Typography variant="subtitle2">{task.notes}</Typography>

				<Box mt={2} display="flex" alignItems="center">
					<EventNoteIcon color="info" fontSize="small" />

					<Typography variant="subtitle2" ml={0.75}>
						{task.dueDate?.toFormat("LLL dd yyyy")}
					</Typography>
				</Box>
			</div>

			<Box ml={4} display="flex" alignItems="center">
				{!task.complete && <EditTaskButton />}

				<DeleteTaskButton />

				<SetTaskCompleteButton />
			</Box>
		</Box>
	);
};

export default observer(ViewTaskDialogView);
