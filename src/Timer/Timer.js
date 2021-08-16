import React, {useEffect, useState} from 'react';
import './Timer.css';

function Timer() {

	const [seconds, setSeconds] = useState(0)
	const [isPaused, setIsPaused] = useState(true)

	useEffect(()=>{
		const interval = setInterval(()=>{
			if(!isPaused){
				setSeconds(time => time + 1)
			}
		},1000)
			return () => clearInterval(interval)
		},[isPaused])

	return (
		<div className="Timer">
			<h3>Timer</h3>
			<ul className="Timer__explanation">
				<li><b>Play:</b> the timer should count the seconds and keep updating</li>
				<li><b>Pause:</b> the timer freeze the timer</li>
				<li><b>Reset:</b> should set the timer to 0</li>
			</ul>
			<div className="Timer__actions">
				<button onClick={() => {setIsPaused(false)}}>Play</button>
				<button onClick={() => {setIsPaused(true)}}>Pause</button>
				<button onClick={() => {setSeconds(0)}}>Reset</button>
			</div>
			<div className="Timer__value">{seconds}</div>
		</div>
	);
}

export default Timer;
