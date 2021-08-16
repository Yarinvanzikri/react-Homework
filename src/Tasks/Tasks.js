import React, {useState} from 'react';
import './Tasks.css';

function Tasks() {
	const [value, setValue] =useState([]);
	const [taskList, setTaskList] = useState([]);
	return (
		<form className="Tasks" onSubmit={(event) => {
			event.preventDefault()
			setTaskList([...taskList, value])
		}}>
			<h3>Tasks:</h3>
			<p>Make a Todo list (add only):</p>
			<input placeholder="Your task..." value={value} onChange={(e) => setValue(e.target.value)}/>
			<button>Add task</button>
			<ul>
				{taskList.map(task => <li>{task}</li>)}
			</ul>
		</form>
	);
}

export default Tasks;
