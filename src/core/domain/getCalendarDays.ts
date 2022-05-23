import { DateTime } from "luxon";

export default function getCalendarDays(
	date: DateTime,
	view: "week" | "month" | "agenda"
) {
	let arr = Array.apply(null, Array(6)).map(
		() =>
			Array.apply(null, Array(7)).map(() => {
				return undefined;
			}) as (DateTime | undefined)[]
	);

	let start =
		view === "week"
			? date.startOf("week")
			: date.startOf("month").weekdayShort === "Mon"
			? date.startOf("month")
			: date.startOf("month").startOf("week");

	for (var w = 0; w < (view === "week" ? 1 : 6); w++) {
		for (var d = 0; d < 7; d++) {
			const dayToAdd = start.plus({
				days: d + w * 7,
			});

			if (dayToAdd.month !== date.month && w > 0 && d === 0) {
				break;
			}

			arr[w][d] = dayToAdd;
		}
	}

	return arr.filter((week) => week[0] || week[6]);
}
