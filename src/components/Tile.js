import React from 'react';

const Tile = (props) => {
	const { i, id, alive } = props;
	return(
		(!alive) ? (<div className="tile">{id}</div>) : (<div className="tile tile__cell" key={i}>{id}</div>)
	)
}

export default Tile;