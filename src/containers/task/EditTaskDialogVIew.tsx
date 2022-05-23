import React from "react";

import { Box, Typography } from "@mui/material";

import CloseTaskButton from "./CloseTaskButton";
import DateInput from "./DateInput";
import SaveTaskButton from "./SaveTaskButton";
import TaskNotesInput from "./TaskNotesInput";
import TaskTitleInput from "./TaskTitleInput";

const EditTaskDialogView = React.memo(() => {
	return (
		<>
			<Box
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				mb={2}
			>
				<Typography variant="subtitle2">New Task</Typography>

				<CloseTaskButton />
			</Box>

			<TaskTitleInput />

			<Box width={"100%"} mt={3} mb={4}>
				<TaskNotesInput />
			</Box>

			<DateInput />

			<Box mt={3} display="flex" justifyContent="flex-end">
				<SaveTaskButton />
			</Box>
		</>
	);
});

export default EditTaskDialogView;
