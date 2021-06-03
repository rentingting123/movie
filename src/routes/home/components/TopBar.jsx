import React from 'react'
import PropTypes from 'prop-types'
import './TopBar.css'
/**
 * BEM
 * block
 * element
 * modifier
 * **/
const TopBar = ({city,showCitylayer}) => {
	return (
		<div className="topBar">
			<div className="topBar__city" onClick={showCitylayer}>{city}</div>
			<div className="topBar__search"></div>
			<div className="topBar__scan"/>
		</div>
	)
}
TopBar.propTypes = {
	city: PropTypes.string.isRequired,
	showCitylayer:PropTypes.func.isRequired
}
export default TopBar;