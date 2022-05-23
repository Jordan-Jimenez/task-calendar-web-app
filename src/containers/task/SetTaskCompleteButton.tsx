import { useCallback } from "react";

import { useNavigate } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import UndoIcon from "@mui/icons-material/Undo";
import { observer } from "mobx-react-lite";

import ToolTipIconButton from "../../components/ToolTipIconButton";
import { useTask } from "../providers/TaskProvider";

const SetTaskCompleteButton = () => {
	const navigate = useNavigate();

	const task = useTask();

	const setComplete = useCallback(() => {
		navigate(
			{ pathname: window.location.pathname, search: "" },
			{ replace: true }
		);

		task.setComplete(task.complete === undefined ? true : !task.complete);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [task.complete]);

	return (
		<ToolTipIconButton
			icon={
				task.complete === true ? (
					<UndoIcon fontSize="small" />
				) : (
					<CheckIcon fontSize="small" />
				)
			}
			tip={task.complete ? "Mark as Incomplete" : "Mark as Complete"}
			onClick={setComplete}
		/>
	);
};

export default observer(SetTaskCompleteButton);
