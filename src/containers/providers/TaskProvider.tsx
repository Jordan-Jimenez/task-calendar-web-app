import React, { createContext, FC, useContext, useMemo } from "react";

import Task from "../../stores/Task";

const Context = createContext<Task | undefined>(undefined);

export const useTask = () => {
	const task = useContext(Context);

	if (!task) {
		throw Error("Can not use context outside of provider");
	}

	return task;
};

interface Params {
	children: JSX.Element | JSX.Element[];
	taskId?: string;
}

const TaskProvider: FC<Params> = React.memo(({ children, taskId }) => {
	const viewModel = useMemo(() => new Task(taskId), [taskId]);

	return <Context.Provider value={viewModel}>{children}</Context.Provider>;
});

export default TaskProvider;
