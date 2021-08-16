import React, {useState} from 'react';
import './RandomNumber.css';

function RandomNumber() {
	const [num, setNum] = useState(null);
	return (
		<div className="RandomNumber">
			<p className="RandomNumber__explanation">
				When clicking on the button, make a random number (between 1-100) to appear in the box.
			</p>

			<button onClick={() => setNum(Math.floor(Math.random()*101))}>Generate number!</button>
			<div className="box">
				{num}
			</div>
		</div>
	);
}

export default RandomNumber;
