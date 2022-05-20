import React, { useEffect } from "react";

import { DateTime } from "luxon";
import { useParams } from "react-router-dom";

import { useApp } from "../context/AppProvider";
import MonthCalendar from "./MonthCalendar";
import WeekCalendar from "./WeekCalendar";

const Root = React.memo(() => {
	const params = useParams();

	const app = useApp();

	useEffect(() => {
		let focusedDate = DateTime.local();

		if (params.year && params.month && params.day) {
			focusedDate = DateTime.fromFormat(
				`${params.year}/${params.month}/${params.day}`,
				"y/L/d"
			);
		}
		app.setFocusedDate(focusedDate);
		app.setViewMode(params.view as "week" | "month");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [params]);

	return (
		<div>
			{params.view === "month" && <MonthCalendar />}
			{params.view === "week" && <WeekCalendar />}
		</div>
	);
});

export default Root;
