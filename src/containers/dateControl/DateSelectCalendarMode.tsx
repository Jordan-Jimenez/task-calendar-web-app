import React, { useCallback, useEffect, useMemo } from "react";

import { Drawer, useMediaQuery, useTheme } from "@mui/material";
import { createSearchParams, useSearchParams } from "react-router-dom";

import DateSelectCalendar from "./DateSelectCalendar";

const DateSelectCalendarMode = React.memo(() => {
	const theme = useTheme();

	const [searchParams, setSearchParams] = useSearchParams();

	const open = useMemo(() => {
		if (searchParams.get("calendarDrawer") === "open") {
			return true;
		}
	}, [searchParams]);

	const close = useCallback(() => {
		setSearchParams(
			createSearchParams({ calendarDrawer: "closed" }).toString()
		);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const mdUp = useMediaQuery(theme.breakpoints.up("md"));

	useEffect(() => {
		if (open && mdUp) {
			setSearchParams(
				createSearchParams({ calendarDrawer: "closed" }).toString()
			);
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [mdUp, open]);

	return (
		<>
			{mdUp ? (
				<DateSelectCalendar />
			) : (
				<Drawer anchor="top" open={open && !mdUp} onClose={close}>
					<DateSelectCalendar />
				</Drawer>
			)}
		</>
	);
});

export default DateSelectCalendarMode;
