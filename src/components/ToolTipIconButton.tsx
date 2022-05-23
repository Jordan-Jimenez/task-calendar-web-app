import React, { FC } from "react";

import { Tooltip, IconButton } from "@mui/material";

interface IToolTipIconButtonProps {
	tip: string;
	onClick: (a?: any, b?: any) => void;
	icon: JSX.Element;
}

const ToolTipIconButton: FC<IToolTipIconButtonProps> = React.memo(
	({ tip, onClick, icon }) => {
		return (
			<Tooltip title={tip}>
				<IconButton onClick={() => onClick()}>{icon}</IconButton>
			</Tooltip>
		);
	}
);

export default ToolTipIconButton;
