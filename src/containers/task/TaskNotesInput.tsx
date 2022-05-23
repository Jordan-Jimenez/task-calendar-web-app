import { useCallback } from "react";

import TextField from "@mui/material/TextField/TextField";
import { observer } from "mobx-react-lite";

import { useTask } from "../providers/TaskProvider";

const TaskNotesInput = () => {
	const task = useTask();

	const setNotes = useCallback(
		(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
			task.setNotes(e.target.value);
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);

	return (
		<TextField
			value={task.notes}
			onChange={setNotes}
			fullWidth
			label="Notes"
			placeholder="Add notes ..."
			multiline
			maxRows={4}
			variant="filled"
		/>
	);
};

export default observer(TaskNotesInput);
