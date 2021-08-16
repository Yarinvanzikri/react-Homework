import React, {useState} from 'react';
import './YayValidator.css';

function YayValidator() {
	const [value, setValue] = useState();


	return (
		<div className="YayValidator">
			<p>
				When the input contains the value "yay",
				change the input's background color to <span className="YayValidator__sample">green</span>:
			</p>
			<input value={value}
				   onChange={(f) => setValue(f.target.value)}
				   style={{background: value === 'yay' ? 'green' : ''}}
				   type="text"
				   className="text-box" />
		</div>
	);
}
// if(value === 'yay' {
// 'green'}
// else {''})
// variable = (condition) ? true-value : false-value;
export default YayValidator;
