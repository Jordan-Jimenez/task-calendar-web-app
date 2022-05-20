import { Tooltip, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const NewTaskButton = () => {
	return (
		<Tooltip title={`Create New Task`}>
			<IconButton
				onClick={() => {
					return;
				}}
			>
				<AddCircleIcon />
			</IconButton>
		</Tooltip>
	);
};

export default NewTaskButton;
