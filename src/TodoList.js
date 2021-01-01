import {
	Checkbox,
	IconButton,
	List,
	ListItem,
	ListItemSecondaryAction,
	ListItemText,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Delete } from '@material-ui/icons';

const GreenCheckbox = withStyles({
	root: {
		color: '#285',
	},
	checked: {},
})((props) => <Checkbox color='default' {...props} />);

const TodoList = ({ taskList, deleteTask }) => {
	return (
		<List>
			{taskList.map((task, index) => (
				<ListItem key={index.toString()} dense button>
					<GreenCheckbox tabIndex={-1} />
					<ListItemText primary={task} />
					<ListItemSecondaryAction>
						<IconButton
							aria-label='Delete'
							onClick={() => {
								deleteTask(index);
							}}
						>
							<Delete />
						</IconButton>
					</ListItemSecondaryAction>
				</ListItem>
			))}
		</List>
	);
};

export default TodoList;
