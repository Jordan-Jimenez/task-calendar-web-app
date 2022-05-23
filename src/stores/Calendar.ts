import { DateTime } from "luxon";
import { action, computed, makeAutoObservable } from "mobx";

import getCalendarDays from "../core/domain/getCalendarDays";

export default class Calendar {
	constructor() {
		makeAutoObservable(this);
	}

	public viewMode: "month" | "week" | "agenda" = "week";

	public focusedDate: DateTime = DateTime.local();

	public incrementOfView: number = 0;

	@action
	public incrementDateView() {
		this.incrementOfView++;
	}

	@action
	public decrementDateView() {
		this.incrementOfView--;
	}

	@action
	public setFocusedDate(date?: DateTime | null) {
		this.focusedDate = date || DateTime.local();
	}

	@action
	public setViewMode(mode: "month" | "week" | "agenda") {
		this.viewMode = mode;
	}

	@computed
	public get calendarDates() {
		return getCalendarDays(this.focusedDate, this.viewMode);
	}

	@computed
	public get focusedDateRange() {
		return this.calendarDates.flat().filter((date) => date) as DateTime[];
	}
}
