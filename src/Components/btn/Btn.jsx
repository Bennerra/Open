import React from 'react';
import "./style.css";

const Btn = ({color, bgColor, text, colorClass}) => {
	return (
		<div style={{color, backgroundColor: bgColor}} className={`btn btn-${colorClass}`}>
			{text}
		</div>
	);
};

export default Btn;