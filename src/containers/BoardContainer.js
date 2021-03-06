import React, { Component } from 'react';
import { array } from 'prop-types';
import { connect } from 'react-redux';

import Board from '../components/Board';

class BoardContainer extends Component {
	render() {
		return(
			<div className="board__container">
				<Board tiles={this.props.tiles} />
			</div>
		)
	}
}

BoardContainer.propTypes = {
	tiles: array.isRequired
}

const mapStateToProps = (state) => {
	return {
		tiles: state.board.tiles
	}
}

export default connect(mapStateToProps)(BoardContainer);
