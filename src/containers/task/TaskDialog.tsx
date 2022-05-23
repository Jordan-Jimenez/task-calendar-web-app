import React, { useCallback, useMemo } from "react";

import { Dialog } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Box } from "@mui/system";

import TaskProvider from "../providers/TaskProvider";
import EditTaskDialogView from "./EditTaskDialogVIew";
import ViewTaskDialogView from "./ViewTaskDialogView";

const TaskDialog = React.memo(() => {
	const searchParams = useSearchParams()[0];

	const navigate = useNavigate();

	const params = useMemo(() => {
		return {
			task: searchParams.get("task") || undefined,
			view: searchParams.get("view") || undefined,
			edit: searchParams.get("edit") || undefined,
		};
	}, [searchParams]);

	const close = useCallback(() => {
		navigate(
			{ pathname: window.location.pathname, search: "" },
			{ replace: true }
		);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Dialog onClose={close} hideBackdrop open={!!params.task}>
			<TaskProvider taskId={params.task === "new" ? undefined : params.task}>
				<Box p={3}>
					{params.task === "new" || params.edit === "true" ? (
						<EditTaskDialogView />
					) : (
						<ViewTaskDialogView />
					)}
				</Box>
			</TaskProvider>
		</Dialog>
	);
});

export default TaskDialog;
