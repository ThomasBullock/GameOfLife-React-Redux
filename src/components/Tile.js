import React, { Component } from 'react';
import { connect } from 'react-redux';
import { activateCell } from '../actions/actionCreators';

class Tile extends Component {
	render() {
		const { i, id, alive } = this.props;		
		return(
			(!alive) ? (<div className="tile" onClick={ () => this.props.activateCell(id) } ></div>) : (<div className="tile tile__cell" key={i}></div>)
		)
	}
}

const mapStateToProps = (state) => {
	return {
		
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		activateCell: (id) => dispatch(activateCell(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Tile);