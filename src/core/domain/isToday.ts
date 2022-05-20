import { DateTime } from "luxon";

export default function isToday(date?: DateTime) {
	if (!date) {
		return undefined;
	}

	const today = DateTime.local();
	if (
		date.day === today.day &&
		date.month === today.month &&
		date.year === today.year
	) {
		return true;
	}

	return false;
}
