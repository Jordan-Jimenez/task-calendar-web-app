import { useCallback } from "react";

import { Box } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

import { useCalendar } from "../../context/CalendarProvider";
import ToolTipIconButton from "../../components/ToolTipIconButton";

const DateIncrementButtons = () => {
	const calendar = useCalendar();

	const navigate = useNavigate();

	const change = useCallback(
		(increment: boolean) => {
			let dateToNavigate = calendar.focusedDate;

			switch (true) {
				case increment && calendar.viewMode === "month":
					dateToNavigate = dateToNavigate.plus({ months: 1 });
					break;
				case increment:
					dateToNavigate = dateToNavigate.plus({ weeks: 1 });
					break;
				case calendar.viewMode === "month":
					dateToNavigate = dateToNavigate.minus({ months: 1 });
					break;
				default:
					dateToNavigate = dateToNavigate.minus({ weeks: 1 });
					break;
			}

			navigate(
				`/${calendar.viewMode}/${dateToNavigate.year}/${dateToNavigate.month}/${dateToNavigate.day}`
			);
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[calendar.viewMode, calendar.focusedDate]
	);

	return (
		<Box display="flex" alignItems="center">
			<ToolTipIconButton
				icon={<ChevronLeftIcon />}
				tip={`previous ${calendar.viewMode}`}
				onClick={() => change(false)}
			/>

			<ToolTipIconButton
				icon={<ChevronRightIcon />}
				tip={`next ${calendar.viewMode}`}
				onClick={() => change(true)}
			/>
		</Box>
	);
};

export default observer(DateIncrementButtons);
