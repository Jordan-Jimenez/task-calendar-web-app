import { useCallback } from "react";

import { Box, Tooltip, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

import { useApp } from "../../context/AppProvider";

const DateIncrementButtons = () => {
	const app = useApp();

	const navigate = useNavigate();

	const change = useCallback(
		(increment: boolean) => {
			let dateToNavigate = app.focusedDate;

			switch (true) {
				case increment && app.viewMode === "month":
					dateToNavigate = dateToNavigate.plus({ months: 1 });
					break;
				case increment:
					dateToNavigate = dateToNavigate.plus({ weeks: 1 });
					break;
				case app.viewMode === "month":
					dateToNavigate = dateToNavigate.minus({ months: 1 });
					break;
				default:
					dateToNavigate = dateToNavigate.minus({ weeks: 1 });
					break;
			}

			navigate(
				`/${app.viewMode}/${dateToNavigate.year}/${dateToNavigate.month}/${dateToNavigate.day}`
			);
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[app.viewMode, app.focusedDate]
	);

	return (
		<Box display="flex" alignItems="center">
			<Tooltip title={`previous ${app.viewMode}`}>
				<IconButton onClick={() => change(false)}>
					<ChevronLeftIcon />
				</IconButton>
			</Tooltip>
			<Tooltip title={`next ${app.viewMode}`}>
				<IconButton onClick={() => change(true)}>
					<ChevronRightIcon />
				</IconButton>
			</Tooltip>
		</Box>
	);
};

export default observer(DateIncrementButtons);
