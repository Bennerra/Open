import React from 'react';
import "./style.css";
import FooterLogo from "./../../img/Logo.svg";
import TwitterIcon from "./../../img/twitter.svg";
import GitHubIcon from "./../../img/github.svg";
import FacebookIcon from "./../../img/facebook.svg";
import InstIcon from "./../../img/inst.svg";
import InIcon from "./../../img/in.svg";

const Footer = () => {
	return (
		<div className="footer">
			<div className="container">
				<div className="footer__top top-footer">
					<div className="top-footer__column footer-column">
						<img className="footer-column__logo" alt="logo" src={FooterLogo}/>
						<p className="footer-column__text">
							Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
						</p>
					</div>
					<div className="top-footer__column footer-column">
						<div className="footer-column__title">Products</div>
						<div className="footer-column__item">Web Studio</div>
						<div className="footer-column__item">DynamicBox Flex</div>
						<div className="footer-column__item">Programming Forms</div>
					</div>
					<div className="top-footer__column footer-column">
						<div className="footer-column__title">Resources</div>
						<div className="footer-column__item">Nostrud exercitation</div>
						<div className="footer-column__item">Visual mockups</div>
						<div className="footer-column__item">Nostrud exercitation</div>
						<div className="footer-column__item">Visual mockups</div>
						<div className="footer-column__item">Nostrud exercitation</div>
					</div>
					<div className="top-footer__column footer-column">
						<div className="footer-column__title">Company</div>
						<div className="footer-column__item">Consectetur adipiscing</div>
						<div className="footer-column__item">Labore et dolore</div>
						<div className="footer-column__item">Consectetur adipiscing</div>
						<div className="footer-column__item">Labore et dolore</div>
						<div className="footer-column__item">Consectetur adipiscing</div>
					</div>
				</div>
				<div className="footer__bottom bottom-footer">
					<div className="bottom-footer__text">
						Made by
						<span className="bottom-footer__span">Cruip</span>
						. All right reserved
					</div>
					<div className="bottom-footer__social footer-social">
						<a href="/" className="footer-social__item footer-social__twitter">
							<img alt="twitter" src={TwitterIcon}/>
						</a>
						<a href="/" className="footer-social__item">
							<img alt="github" src={GitHubIcon}/>
						</a>
						<a href="/" className="footer-social__item footer-social__fb">
							<img alt="facebook" src={FacebookIcon}/>
						</a>
						<a href="/" className="footer-social__item">
							<img alt="inst" src={InstIcon}/>
						</a>
						<a href="/" className="footer-social__item">
							<img alt="in" src={InIcon}/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;