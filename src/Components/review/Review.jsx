import React from 'react';
import "./style.css";

const Review = ({img, name, text}) => {
	return (
		<div className="items-reviews__item review">
			<div className="review__img">
				<img alt="person" src={img}/>
			</div>
			<p className="review__article">
				— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.
			</p>
			<div className="review__info info-review">
				{name}
				<span className="info-review__slash"> / </span>
				<span className="info-review__text">{text}</span>
			</div>
		</div>
	);
};

export default Review;