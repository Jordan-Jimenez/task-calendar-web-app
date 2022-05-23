import React, { useCallback } from "react";

import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

import ToolTipIconButton from "../../components/ToolTipIconButton";

const CloseTaskButton = React.memo(() => {
	const navigate = useNavigate();

	const close = useCallback(() => {
		navigate(
			{ pathname: window.location.pathname, search: "" },
			{ replace: true }
		);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<ToolTipIconButton icon={<CloseIcon />} tip={"Close"} onClick={close} />
	);
});

export default CloseTaskButton;
