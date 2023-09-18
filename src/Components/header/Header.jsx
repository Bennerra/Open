import React from 'react';
import logo from "./../../img/Logo.svg";
import "./style.css";
import {NavLink} from "react-router-dom";

const Header = ({btn1, btn2}) => {
	return (
		<div>
			<header className="header">
				<div className="header__wrapper">
					<NavLink to="/" className="header__logo logo">
						<img alt="logo" src={logo} />
					</NavLink>
					<div className="header__buttons">
						<NavLink to="/signin">
							{btn1}
						</NavLink>
						{btn2}
					</div>
				</div>
			</header>
		</div>
	);
};

export default Header;

