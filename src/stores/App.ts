import { DateTime } from "luxon";
import { action, computed, makeAutoObservable } from "mobx";

import getCalendarDays from "../core/domain/getCalendarDays";

export default class App {
	constructor() {
		makeAutoObservable(this);
	}

	public viewMode: "month" | "week" = "week";

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
	public setViewMode(mode: "month" | "week") {
		this.viewMode = mode;
	}

	@computed
	public get focusedDateRange() {
		return getCalendarDays(this.focusedDate, this.viewMode);
	}
}
