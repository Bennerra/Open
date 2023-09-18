import React from 'react';
import "./style.css";

const Solution = ({img, order}) => {
	return (
		<div className="solutions__item solution">
			<div className="solution__info">
				<div className="solution__speed">More speed. Less spend</div>
				<h3 className="solution__title">Keep projects on schedule</h3>
				<p className="solution__text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
				<ul className="solution__list solution-list">
					<li className="solution-list__item">Duis aute irure dolor in reprehenderit</li>
					<li className="solution-list__item">Excepteur sint occaecat </li>
					<li className="solution-list__item">Amet consectetur adipiscing elit</li>
				</ul>
			</div>
			<div className="solution__img" style={{order}}>
				<img alt="solution" src={img}/>
			</div>
		</div>
	);
};

export default Solution;