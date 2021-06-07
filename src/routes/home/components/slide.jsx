import React from 'react'
import Slider from "react-slick";
import PropTypes from 'prop-types'
import './Slide.css';

const PosterSlide = ()=> {
	const settings = {
    dots: true,
    autoplay: true,
		className:'posterSlide',
		dotsClass:"posterSlide__dots"
  };

	return (
		<Slider {...settings}>
			<div>
				<img className="posterSlide__image" src="/source/slide/slide1.jpeg" alt="1"/>
			</div>
			<div>
				<img className="posterSlide__image" src="/source/slide/slide2.jpeg" alt="1"/>
			</div>
			<div>
				<img className="posterSlide__image" src="/source/slide/slide3.jpeg" alt="1"/>
			</div>
			<div>
				<img className="posterSlide__image" src="/source/slide/slide4.jpeg" alt="1"/>
			</div>
			<div>
				<img className="posterSlide__image" src="/source/slide/slide5.jpeg" alt="1"/>
			</div>
			<div>
				<img className="posterSlide__image" src="/source/slide/slide1.jpeg" alt="1"/>
			</div>
		</Slider>
	)
}
PosterSlide.prototype = {
	data: PropTypes.array.isRequired
}
export default PosterSlide