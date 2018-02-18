import React, { Component } from 'react';

import { func, number } from 'prop-types';
import { connect } from 'react-redux';
import { sizes } from '../modules/sizes';

import { changeSize, loadPreset } from '../actions/actionCreators';

class FooterContainer extends Component {
	render() {
		const { changeSize, loadPreset, size } = this.props;		
		const sizeBtnClassnames = (btn) => {
			return (btn === size) ? "control__btn control__btn--active" : "control__btn"
		}
		
		console.log(sizeBtnClassnames(sizes.medium));
		return(
			<div className="control control--bottom">
				<ul className="control__sizes">
					<li>
						<button className={sizeBtnClassnames(sizes.small)} onClick={ () => changeSize(sizes.small) }>Small</button>
					</li>
					<li>
						<button className={sizeBtnClassnames(sizes.medium)} onClick={ () => changeSize(sizes.medium) }>Medium</button>
					</li>
					<li>
						<button className={sizeBtnClassnames(sizes.large)} onClick={ () => changeSize(sizes.large) }>Large</button>
					</li>										
				</ul>
				<div className="control__presets">
					<button className="control__btn" onClick={ () => loadPreset("spaceship") } >
						SpaceShip
					</button>
					<button className="control__btn" disabled={(size < 50)} onClick={ () => loadPreset("pentadecathalon") }>
						Pentadecathalon
					</button>
					<button className="control__btn" disabled={(size < 50)} onClick={ () => loadPreset("pulsar") }>
						Pulsar
					</button>											
				</div>			
			</div>	
		)		
	}

}

FooterContainer.propTypes = {
	changeSize: func.isRequired,
	loadPreset: func.isRequired,
	size: number.isRequired
}

const mapStateToProps = (state) => {
	return {
		size: state.board.size
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		changeSize: (size) => dispatch(changeSize(size)),
		loadPreset: (preset) => dispatch(loadPreset(preset))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FooterContainer);