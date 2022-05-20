import React, { useCallback } from "react";

import { Tooltip, IconButton } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { createSearchParams, useSearchParams } from "react-router-dom";

const DateSelectDrawerButton = React.memo(() => {
	const setSearchParams = useSearchParams()[1];

	const openDrawer = useCallback(() => {
		setSearchParams(createSearchParams({ calendarDrawer: "open" }).toString());

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Tooltip title={`Open Calendar Select`}>
			<IconButton onClick={openDrawer}>
				<CalendarMonthIcon />
			</IconButton>
		</Tooltip>
	);
});

export default DateSelectDrawerButton;
