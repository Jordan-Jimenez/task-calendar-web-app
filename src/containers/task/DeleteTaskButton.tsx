import React, { useCallback } from "react";

import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

import ToolTipIconButton from "../../components/ToolTipIconButton";
import { useTask } from "../providers/TaskProvider";

const DeleteTaskButton = React.memo(() => {
	const navigate = useNavigate();

	const task = useTask();

	const setComplete = useCallback(() => {
		navigate(
			{ pathname: window.location.pathname, search: "" },
			{ replace: true }
		);

		task.deleteTask();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [task]);

	return (
		<ToolTipIconButton
			icon={<DeleteIcon fontSize="small" />}
			tip={"Delete Task"}
			onClick={setComplete}
		/>
	);
});

export default DeleteTaskButton;
