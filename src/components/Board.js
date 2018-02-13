import React from 'react';
import Tile from './Tile';

const Board = (props) => {
	
	const createRow = (row) => {
		// console.log(row)
		return row.map( (tile, i) => {
			return (
				<Tile key={i} id={tile.id} alive={tile.cell} />
			)
		})
	}		
	const { tiles } = props;

	return(
		<div className="board">
			{ tiles.map ( (tiles, i) => {
				return (
					<div key={`row-${i}`} className="board__row">
					
						{createRow(tiles)}
					</div>
				)
			})
				
			}
			
		</div>	
	)
}

export default Board;