import React, { Component } from 'react';
import { instanceOf, func, bool } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import IconPlay from '../components/icons/Play';
import IconPause from '../components/icons/Pause';
import IconNext from '../components/icons/Next';
import IconReset from '../components/icons/Reset';

import { changeSize, step, start, pause, reset } from '../actions/actionCreators';

class ControlContainer extends Component {
	startHandler() {
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
		const { changeSize, step, reset, isPlaying, size } = this.props;
		return(
			<div className="control">
				<div className="control__transport">
					<button onClick={ () => this.startHandler() }>
						{ (!isPlaying) ? (<IconPlay/>) : (<IconPause/>)
						}
					</button>
					<button disabled={isPlaying} className="control__btn" onClick={ () => step() }>
						<IconNext />
					</button>
					<button className="control__btn" onClick={ () => reset() }>
						<IconReset />
					</button>
				</div>
				<ul className="control__sizes">
					<li>
						<button active={size === 20 }className="control__btn" onClick={ () => changeSize(20) }>Small</button>
					</li>
					<li>
						<button className="control__btn" onClick={ () => changeSize(30) }>Medium</button>
					</li>
					<li>
						<button className="control__btn" onClick={ () => changeSize(40) }>Large</button>
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
		timerId: state.controls.timerId,
		size: state.board.size
	}
}


const mapDispatchToProps = (dispatch) => {
	return {
		changeSize: (size) => dispatch(changeSize(size)),
		step: () => dispatch(step()),
		start: (timerId) => dispatch(start(timerId)),
		pause: () => dispatch(pause()),
		reset: () => dispatch(reset())		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlContainer);
