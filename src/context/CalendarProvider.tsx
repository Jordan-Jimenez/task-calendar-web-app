import React, { createContext, FC, useContext, useMemo } from "react";

import Calendar from "../stores/Calendar";

const Context = createContext<Calendar | undefined>(undefined);

export const useCalendar = () => {
	const Calendar = useContext(Context);

	if (!Calendar) {
		throw new Error("Must be used inside context.");
	}

	return Calendar;
};

interface Params {
	children: JSX.Element | JSX.Element[];
}

const CalendarProvider: FC<Params> = React.memo(({ children }) => {
	const calendar = useMemo(() => new Calendar(), []);

	return <Context.Provider value={calendar}>{children}</Context.Provider>;
});

export default CalendarProvider;
