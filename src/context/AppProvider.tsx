import React, { createContext, FC, useContext, useMemo } from "react";

import App from "../stores/App";

const Context = createContext<App | undefined>(undefined);

export const useApp = () => {
	const app = useContext(Context);

	if (!app) {
		throw new Error("Must be used inside context.");
	}

	return app;
};

interface Params {
	children: JSX.Element | JSX.Element[];
}

const AppProvider: FC<Params> = React.memo(({ children }) => {
	const app = useMemo(() => new App(), []);

	return <Context.Provider value={app}>{children}</Context.Provider>;
});

export default AppProvider;
