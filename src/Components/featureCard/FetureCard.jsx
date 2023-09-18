import React from 'react';
import "./style.css";

const FetureCard = ({img, title, text}) => {
	return (
		<div className="workflows__feature feature-workflows">
			<div className="feature-workflows__img">
				<img alt="icon" src={img} />
			</div>
			<h4 className="feature-workflows__title">{title}</h4>
			<p className="feature-workflows__text">{text}</p>
		</div>
	);
};

export default FetureCard;