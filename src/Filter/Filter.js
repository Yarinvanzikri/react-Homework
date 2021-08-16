import React, {useState} from 'react';
import './Filter.css';

function Filter() {
	const [value, setValue] = useState('')
	const [items] = useState([
		'Big fox',
		'Small elephant',
		'Big ant',
		'Small dinosaur',
		'Medium dog'
	]);
	return (
		<div className="Filter">
			<p>Filter the list as you type.</p>
			<input onChange={(e)=> setValue(e.target.value)} value={value} placeholder="Search..." className="Filter__textbox" />
			<ul>
				{items.map((item, index) => {
					if(item.includes(value))
					return <li key={index}>{item}</li>;
				})}
			</ul>
		</div>
	)
}

export default Filter;
