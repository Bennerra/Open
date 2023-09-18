import React from 'react';
import Header from "../Components/header/Header";
import GoogleLogo from "../img/google-logo.svg";
import Btn from "../Components/btn/Btn";

const SignIn = () => {
	return (
		<div>
			<Header/>
			<main className="main">
				<div className="container">
					<section className="sign-in">
						<h1 className="sign-in__title">Sign in with Google</h1>
					</section>
				</div>
			</main>
		</div>
	);
};

export default SignIn;