import React, { useCallback } from "react";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { createSearchParams, useSearchParams } from "react-router-dom";

import ToolTipIconButton from "../../components/ToolTipIconButton";

const DateSelectDrawerButton = React.memo(() => {
	const setSearchParams = useSearchParams()[1];

	const openDrawer = useCallback(() => {
		setSearchParams(createSearchParams({ calendarDrawer: "open" }).toString());

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [window.location.pathname]);

	return (
		<ToolTipIconButton
			icon={<CalendarMonthIcon />}
			tip={`Open Calendar Select`}
			onClick={openDrawer}
		/>
	);
});

export default DateSelectDrawerButton;
