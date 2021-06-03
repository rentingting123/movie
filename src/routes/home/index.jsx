import React, { Component } from 'react';
import './index.css'
import TopBar from './components/TopBar'
import PosterSlide from './components/slide'
import MoiveItem from './components/moiveItem'
export default class Home extends Component {
	showCitylayer = () => {
		console.log(1111);
	}

	render() {
		return (
			<div className="home">
				<TopBar city="杭州" showCitylayer={this.showCitylayer}/>
				<div className="home__slide">
					<div className="home__slideWrap">
						<PosterSlide data={[]}/>
					</div>
				</div>
				<ul className="home__content">
					<li><MoiveItem/></li>	
					<li><MoiveItem/></li>
					<li><MoiveItem/></li>
				</ul>
			</div>
		);
	};
};