import { observer } from "mobx-react-lite";
import Grid from "@mui/material/Grid/Grid";

import { useApp } from "../context/AppProvider";
import WeekDay from "./WeekDay";
import MonthDay from "./MonthDay";

const Calendar = () => {
	const app = useApp();

	return (
		<>
			{app.focusedDateRange.map((week, i) => (
				<Grid key={`week: ${i + 1}`} container>
					{week.map((d) => {
						return (
							<>
								{app.viewMode === "week" ? (
									<WeekDay key={d?.toISO()} date={d} />
								) : (
									<MonthDay date={d} showWeekday={i === 0} key={d?.toISO()} />
								)}
							</>
						);
					})}
				</Grid>
			))}
		</>
	);
};

export default observer(Calendar);
