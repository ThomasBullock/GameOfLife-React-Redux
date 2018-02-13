import React, { Component } from 'react';
import { instanceOf, func, bool } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { changeSize, step, start, pause } from '../actions/actionCreators';

class ControlContainer extends Component {
	startHandler() {
		console.log(this.props.isPlaying)
		if(this.props.isPlaying) {
			clearInterval(this.props.timerId)
			this.props.pause();
		} else {
			const timer = setInterval(this.props.step, this.props.interval)
			this.props.start(timer);
		}
		// window.setInterval(this.props.step, this.props.interval)
	}
	
	
	render() {
		const { changeSize, step } = this.props;
		return(
			<div className="control">
				<button onClick={ () => this.startHandler() }>Play</button>
				<ul className="control__sizes">
					<li>
						<button onClick={ () => changeSize(20) }>Small</button>
					</li>
					<li>
						<button onClick={ () => changeSize(30) }>Medium</button>
					</li>
					<li>
						<button onClick={ () => changeSize(40) }>Large</button>
					</li>					
				</ul>
			</div>
		)
	}
}

ControlContainer.propTypes = {
	isPlaying: bool.isRequired,
	changeSize: func.isRequired
}


const mapStateToProps = (state) => {
	return {
		isPlaying: state.controls.isPlaying,
		interval: state.controls.interval,
		timerId: state.controls.timerId
	}
}


const mapDispatchToProps = (dispatch) => {
	return {
		changeSize: (size) => dispatch(changeSize(size)),
		step: () => dispatch(step()),
		start: (timerId) => dispatch(start(timerId)),
		pause: () => dispatch(pause())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlContainer);
