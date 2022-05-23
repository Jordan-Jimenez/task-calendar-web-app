import React, { useCallback } from "react";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useNavigate } from "react-router-dom";

import ToolTipIconButton from "../../components/ToolTipIconButton";

const AddTaskButton = React.memo(() => {
	const navigate = useNavigate();

	const openNewTask = useCallback(() => {
		navigate(
			{
				pathname: window.location.pathname,
				search: "?task=new",
			},
			{ replace: true }
		);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<ToolTipIconButton
			icon={<AddCircleIcon color="primary" />}
			tip={`Create New Task`}
			onClick={openNewTask}
		/>
	);
});

export default AddTaskButton;
