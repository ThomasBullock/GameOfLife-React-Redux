import React from 'react';
import { func, number } from 'prop-types';

const RangeSlider = (props) => {
		const { value, min, max, step, rangeHandler } = props;

		// console.log(this.props)
		return(
			<div  className="range-slider">
				<label className="range-slider__label" htmlFor="myRange" >Interval</label>
		  	<input className="range-slider__input" onChange={ (e) => rangeHandler(e) } type="range" min={min} max={max} step={step} defaultValue={value} id="myRange"/>
			</div>
		
		)
}

RangeSlider.propTypes = {
	value: number.isRequired,
	min: number.isRequired,
	max: number.isRequired,
	step: number.isRequired,
	rangeHandler: func.isRequired
}

RangeSlider.defaultProps = {
	value: 50,
	min: 0,
	max: 100,
	step: 10
}


export default RangeSlider;