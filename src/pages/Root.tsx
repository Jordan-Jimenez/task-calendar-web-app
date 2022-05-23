import React, { useEffect } from "react";

import { DateTime } from "luxon";
import { useParams } from "react-router-dom";

import { useCalendar } from "../context/CalendarProvider";
import MonthCalendar from "./MonthCalendar";
import WeekCalendar from "./WeekCalendar";
import TaskAgenda from "./TaskAgenda";

const Root = React.memo(() => {
	const params = useParams();

	const calendar = useCalendar();

	useEffect(() => {
		let focusedDate = DateTime.local();

		if (params.year && params.month && params.day) {
			focusedDate = DateTime.fromFormat(
				`${params.year}/${params.month}/${params.day}`,
				"y/L/d"
			);
		}
		calendar.setFocusedDate(focusedDate);
		calendar.setViewMode(params.view as "week" | "month");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [params]);

	return (
		<>
			{params.view === "month" && <MonthCalendar />}

			{params.view === "week" && <WeekCalendar />}

			{params.view === "agenda" && <TaskAgenda />}
		</>
	);
});

export default Root;
