import useLocalStorage from './useLocalStorage';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

import './App.css';

const Header = withStyles({
	root: {
		color: '#142',
	},
})(Typography);

const App = () => {
	const [taskList, setTaskList] = useLocalStorage('tasklist', ['Example task']);

	const addTask = (task) => {
		setTaskList([...taskList, task]);
	};

	const deleteTask = (taskIndex) => {
		const updatedTasks = taskList.filter((_, index) => index !== taskIndex);
		setTaskList(updatedTasks);
	};

	return (
		<div className='App'>
			<Header variant='h2' component='h2'>
				Simple ToDo
			</Header>
			<TodoForm saveTask={addTask} />
			<TodoList taskList={taskList} deleteTask={deleteTask} />
		</div>
	);
};

export default App;
