import { DateTime } from "luxon";
import { makeAutoObservable } from "mobx";
import { v4 as uuidv4 } from "uuid";

import App from "./App";

export default class Task {
	constructor(private taskId?: string) {
		makeAutoObservable(this);

		if (!this.taskId) {
			this.taskId = uuidv4();

			return;
		}

		if (this.taskId) {
			this.loadTask();
		}
	}

	public title?: string;

	public dueDate?: DateTime | null = DateTime.local();

	public notes?: string;

	public complete: boolean = false;

	public setComplete = (val?: boolean) => {
		if (val === undefined) {
			this.complete = !this.complete;

			return;
		}

		this.complete = val;

		this.saveTask();
	};

	public setDueDate(date?: DateTime | null) {
		this.dueDate = date || undefined;
	}

	public setTitle(title?: string) {
		this.title = title;
	}

	public setNotes(notes?: string) {
		this.notes = notes;
	}

	public saveTask() {
		if (!this.taskId || !this.title || !this.dueDate) {
			return;
		}

		App.storeTask({
			id: this.taskId!,
			title: this.title,
			dueDate: this.dueDate?.startOf("day").toISO(),
			notes: this.notes,
			complete: this.complete,
		});
	}

	public deleteTask() {
		App.deleteTask(this.taskId!);
	}

	private loadTask() {
		const task = App.tasks?.[this.taskId!];

		if (!task) {
			return;
		}

		this.setDueDate(DateTime.fromISO(task.dueDate));

		this.setNotes(task.notes);

		this.setTitle(task.title);

		this.setComplete(task.complete);
	}
}
