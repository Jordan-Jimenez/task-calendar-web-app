import { DateTime } from "luxon";
import { computed, makeAutoObservable } from "mobx";

export interface TaskInfo {
	title: string;
	notes?: string;
	complete: boolean;
	dueDate: string;
	id: string;
}

class App {
	constructor() {
		makeAutoObservable(this);

		this.getTasks();
	}

	public tasks?: {
		[key: string]: TaskInfo;
	} = {};

	public storeTask(task: TaskInfo) {
		let tasks = JSON.parse(
			localStorage.getItem("taskCalendarTasks") || "{}"
		) as {
			[key: string]: TaskInfo;
		};

		tasks[task.id] = task;

		localStorage.setItem("taskCalendarTasks", JSON.stringify(tasks));

		this.tasks = tasks;
	}

	public deleteTask(taskId: string) {
		let tasks = JSON.parse(
			localStorage.getItem("taskCalendarTasks") || "{}"
		) as {
			[key: string]: TaskInfo;
		};

		delete tasks[taskId];

		localStorage.setItem("taskCalendarTasks", JSON.stringify(tasks));

		this.tasks = tasks;
	}

	private getTasks() {
		this.tasks = JSON.parse(localStorage.getItem("taskCalendarTasks") || "{}");
	}

	@computed
	public get taskArr() {
		return Object.values(this.tasks || {});
	}

	@computed
	public get tasksByDate() {
		const taskDates = this.taskArr
			.map((task) => DateTime.fromISO(task.dueDate))
			.filter((date) => date)
			.sort((a, b) => a.valueOf() - b.valueOf())
			.map((date) => date.toISO());

		const datesWithTasks = Array.from(new Set(taskDates));

		let obj: { [key: string]: TaskInfo[] } = {};

		datesWithTasks
			.map((date) => this.taskArr.filter((tasks) => tasks.dueDate === date))
			.map((date) => (obj[date[0].dueDate] = date));

		return obj;
	}
}

export default new App();
