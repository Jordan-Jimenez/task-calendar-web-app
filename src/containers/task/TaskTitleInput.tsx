import { useCallback } from "react";

import { TextField } from "@mui/material";
import { observer } from "mobx-react-lite";

import { useTask } from "../providers/TaskProvider";

const TaskTitleInput = () => {
	const task = useTask();

	const setTitle = useCallback(
		(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
			task.setTitle(e.target.value);
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);

	return (
		<TextField
			value={task.title}
			onChange={setTitle}
			fullWidth
			placeholder="Add Title"
			variant="standard"
		/>
	);
};

export default observer(TaskTitleInput);
