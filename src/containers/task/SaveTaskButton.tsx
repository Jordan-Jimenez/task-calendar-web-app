import { useCallback } from "react";

import Button from "@mui/material/Button/Button";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

import { useTask } from "../providers/TaskProvider";

const SaveTaskButton = () => {
	const task = useTask();

	const navigate = useNavigate();

	const save = useCallback(() => {
		task.saveTask();

		navigate(
			{ pathname: window.location.pathname, search: "" },
			{ replace: true }
		);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Button
			onClick={save}
			disabled={!task.dueDate || !task.title}
			variant="contained"
		>
			Save
		</Button>
	);
};

export default observer(SaveTaskButton);
