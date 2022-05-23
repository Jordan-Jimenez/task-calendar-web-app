import React, { useCallback } from "react";

import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

import ToolTipIconButton from "../../components/ToolTipIconButton";

const EditTaskButton = React.memo(() => {
	const navigate = useNavigate();

	const setEdit = useCallback(() => {
		navigate(
			{
				pathname: window.location.pathname,
				search: `${window.location.search}&edit=true`,
			},
			{ replace: true }
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [window.location.search]);

	return (
		<ToolTipIconButton
			icon={<EditIcon fontSize="small" />}
			tip="Edit Task"
			onClick={setEdit}
		/>
	);
});

export default EditTaskButton;
