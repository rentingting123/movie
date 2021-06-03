import React from 'react'
import Slider from "react-slick";

export default function PosterSlide() {
	const settings = {
    dots: true,
    // autoPlay: true,
  };
	return (
		<div>
			<Slider {...settings}>
				<div>
					<h3>1</h3>
					{/* <img className="posterSlide__image" src={item.image} alt=""/> */}
				</div>
				<div>
						<h3>2</h3>
				</div>
				<div>
						<h3>3</h3>
				</div>
				<div>
						<h3>4</h3>
				</div>
				<div>
						<h3>5</h3>
				</div>
				<div>
						<h3>6</h3>
				</div>
			</Slider>
		</div>
	)
}
