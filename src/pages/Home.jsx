import React from 'react';
import Header from "../Components/header/Header";
import Btn from "../Components/btn/Btn";
import FetureCard from "../Components/featureCard/FetureCard";
import Solution from "../Components/solution/Solution";
import Review from "../Components/review/Review";
import LandingImg from "./../img/video-landing.jpg";
import WorkflowsIcon1 from "./../img/workflows-icon1.svg";
import WorkflowsIcon2 from "./../img/workflows-icon2.svg";
import WorkflowsIcon3 from "./../img/workflows-icon3.svg";
import WorkflowsIcon4 from "./../img/workflows-icon4.svg";
import WorkflowsIcon5 from "./../img/workflows-icon5.svg";
import WorkflowsIcon6 from "./../img/workflows-icon6.svg";
import SolutionImg1 from "./../img/solution1.jpg";
import SolutionImg2 from "./../img/solution2.jpg";
import SolutionImg3 from "./../img/solution3.jpg";
import ReviewImg1 from "./../img/review1.jpg";
import ReviewImg2 from "./../img/review2.jpg";
import ReviewImg3 from "./../img/review3.jpg";
import Footer from "../Components/footer/Footer";


const Home = () => {
	return (
		<div>
			<Header
				btn1={<Btn color={'#5d5dff'} bgColor={'inherit'} text={'Sign in'}/>}
				btn2={<Btn color={'#fff'} bgColor={'#5d5dff'} text={'Sign up'}/>}
			/>
			<main className="main">
				<div className="container">
					<section className="landing">
						<h1 className="landing__title">Landing template for startups</h1>
						<p className="landing__text">
							Our landing page template works on all devices, so you only have to
							set it up once, and get beautiful results forever.
						</p>
						<div className="landing__buttons">
							<Btn text={'Start free trial'} bgColor={'#5D5DFF'} color={'#fff'}/>
							<Btn text={'Learn more'} bgColor={'#33363A'} color={'#C5D2DC'}/>
						</div>
						<img className="landing__img" alt="video" src={LandingImg}/>
					</section>
					<section className="workflows">
						<h2 className="workflows__title title">The majority our customers do not understand their workflows.</h2>
						<p className="workflows__text text">
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
						<div className="workflows__features feature-workflows">
							<FetureCard
								img={WorkflowsIcon1}
								title={'Instant Features'}
								text={'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.'}
							/>
							<FetureCard
								img={WorkflowsIcon2}
								title={'Instant Features'}
								text={'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.'}
							/>
							<FetureCard
								img={WorkflowsIcon3}
								title={'Instant Features'}
								text={'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.'}
							/>
							<FetureCard
								img={WorkflowsIcon4}
								title={'Instant Features'}
								text={'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.'}
							/>
							<FetureCard
								img={WorkflowsIcon5}
								title={'Instant Features'}
								text={'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.'}
							/>
							<FetureCard
								img={WorkflowsIcon6}
								title={'Instant Features'}
								text={'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.'}
							/>
						</div>
					</section>
					<section className="solutions">
						<div className="solution__button">Reach goals that matter</div>
						<h2 className="solutions__title title">One product, unlimited solutions</h2>
						<p className="solutions__text text">
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
							deserunt mollit laborum — semper quis lectus nulla.
						</p>
						<Solution img={SolutionImg1}/>
						<Solution img={SolutionImg2} order={-1}/>
						<Solution img={SolutionImg3}/>
					</section>
					<section className="reviews">
						<h2 className="reviews__title title">Don't take our word for it</h2>
						<p className="reviews__text text">
							Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.
						</p>
						<div className="reviews__items items-reviews">
							<Review img={ReviewImg1} text={'UX Board'} name={'Anastasia Dan'}/>
							<Review img={ReviewImg2} text={'AppName'} name={'Roman Level'}/>
							<Review img={ReviewImg3} text={'Reform Layouts'} name={'Akex Sackett'}/>
						</div>
					</section>
					<section className="form">
						<div className="form__info info-form">
							<h4 className="info-form__title">Stay in the loop</h4>
							<p className="info-form__text">Join our newsletter to get top news before anyone else.</p>
						</div>
						<div className="form__input input-form">
							<input className="input-form__field" type="text" placeholder="Your best email…"/>
							<button className="input-form__btn">Subscribe</button>
						</div>
					</section>
				</div>
			</main>
			<Footer/>
		</div>
	);
};

export default Home;