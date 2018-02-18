import React, { Component } from 'react';
import { bool, number } from 'prop-types';
import { connect } from 'react-redux';
import IconPlay from '../components/icons/Play';
import IconPause from '../components/icons/Pause';
import IconNext from '../components/icons/Next';
import IconReset from '../components/icons/Reset';

import { step, start, pause, reset, adjustSpeed  } from '../actions/actionCreators';

import RangeSlider from './RangeSlider';

class ControlContainer extends Component {
	constructor(props) {
		super(props);
			
		this.rangeHandler = this.rangeHandler.bind(this);
	}
	
	rangeHandler(e) {
		this.props.adjustSpeed(parseInt(e.target.value, 10))
	}
	
	startHandler() {	
		const request = () => {
			this.props.step();
			clearInterval(timer);
			timer = setInterval(request, this.props.interval);
			this.props.start(timer);	
		}
		
		if(this.props.isPlaying) {
			clearInterval(this.props.timerId)
			this.props.pause();
		} else {
			var timer = setInterval(request, this.props.interval)
		}	
	}
	
	
	render() {
		const { step, reset, isPlaying, generation, interval } = this.props;
		return(
			<div className="control control--top">
				<div className="control__transport">
					<button className="control__btn" onClick={ () => this.startHandler() }>
						{ (!isPlaying) ? (<IconPlay/>) : (<IconPause/>)
						}
					</button>
					<button className="control__btn" disabled={isPlaying} onClick={ () => step() }>
						<IconNext />
					</button>
					<button className="control__btn" onClick={ () => reset() }>
						<IconReset />
					</button>
				</div>
				<div className="control__generation">
					<span>Generation: {generation}</span>
				</div>
				<RangeSlider value={interval} step={75} min={75} max={525} rangeHandler={this.rangeHandler}/>				
			</div>
		)
	}
}

ControlContainer.propTypes = {
	isPlaying: bool.isRequired,
	generation: number.isRequired,
	interval: number.isRequired
}


const mapStateToProps = (state) => {
	return {
		isPlaying: state.controls.isPlaying,
		interval: state.controls.interval,
		timerId: state.controls.timerId,
		size: state.board.size,
		generation: state.board.generation
	}
}


const mapDispatchToProps = (dispatch) => {
	return {
		step: () => dispatch(step()),
		start: (timerId) => dispatch(start(timerId)),
		pause: () => dispatch(pause()),
		reset: () => dispatch(reset()),
		adjustSpeed: (interval) => dispatch(adjustSpeed(interval)) 		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlContainer);
