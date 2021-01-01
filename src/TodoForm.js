import { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

const CssTextField = withStyles({
	root: {
		'& label.Mui-focused': {
			color: '#285',
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: '#4B8',
			},
			'&:hover fieldset': {
				borderColor: '#8DA',
			},
			'&.Mui-focused fieldset': {
				borderColor: '#285',
			},
		},
	},
})(TextField);

const TodoForm = ({ saveTask }) => {
	const [task, setTask] = useState('');

	const submitTaskHandler = (e) => {
		e.preventDefault();
		saveTask(task);
		setTask('');
	};

	return (
		<div>
			<form onSubmit={submitTaskHandler}>
				<CssTextField
					autofocus
					variant='outlined'
					placeholder='Add todo'
					margin='normal'
					value={task}
					onChange={(e) => setTask(e.target.value)}
					InputProps={{
						startAdornment: (
							<InputAdornment position='start'>
								<IconButton>
									<CreateOutlinedIcon fontSize='small' />
								</IconButton>
							</InputAdornment>
						),
					}}
				/>
			</form>
		</div>
	);
};

export default TodoForm;
