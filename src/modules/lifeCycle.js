import { cloneDeep } from 'lodash';

export const lifeCycle = (tiles) => {
	// console.log(tiles)
	const nextGeneration = cloneDeep(tiles);
	const countLiveNeighbours = (x, y) => {
		let neighbourCells = 0;
		// const adjustY = (y === 0) ? tiles.length - 1 : y;
		let yNeg = y - 1;
		let yPos = y + 1;
		let xNeg = x - 1;
		let xPos = x + 1;
		if(y === 0) {
			yNeg = tiles.length - 1;
		} else if (y === tiles.length - 1) {
			yPos = 0;
		}
		if(x === 0) {
			xNeg = tiles[0].length - 1; 
		} else if(x === tiles[0].length - 1) {
			xPos = 0;
		}
		// console.log(xNeg, xPos, yNeg, yPos);
		// top row
		if(tiles[yNeg][xNeg].cell) {
			neighbourCells++;
		}
		if(tiles[yNeg][x].cell) {
			neighbourCells++;
		}
		if(tiles[yNeg][xPos].cell) {
			neighbourCells++;
		}
		// sides
		if(tiles[y][xNeg].cell) {
			neighbourCells++;
		}	
		if(tiles[y][xPos].cell) {
			neighbourCells++;
		}
		// bottom row
		if(tiles[yPos][xNeg].cell) {
			neighbourCells++;
		}
		if(tiles[yPos][x].cell) {
			neighbourCells++;
		}
		if(tiles[yPos][xPos].cell) {
			neighbourCells++;
		}				
		return neighbourCells;
	} // end countLiveNeighbours
		
		// cycle through rows with for loop for efficiency over map
		for(let i = 0; i < tiles.length-1; i ++) {
		// cycle through cells
		for(let j = 0; j <  tiles[i].length; j++) {
			// console.log(tiles[i][j]);
			// if cell is alive
			if(tiles[i][j].cell === true) {
				// count live neighbours
				const neighbours = countLiveNeighbours(j, i);
				// Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
				if(neighbours < 2 || neighbours > 3) {
					// console.log('killing cell')
					nextGeneration[i][j].cell = false;
				} 
								
			} else if(tiles[i][j].cell === false) {
				const neighbours = countLiveNeighbours(j, i);
				if(neighbours === 3) {
					nextGeneration[i][j].cell = true;
				} else {
						// console.log('unchanged')
						nextGeneration[i][j].cell = false;
					}
			}

		}		
	}
	// console.log(nextGeneration);
	return nextGeneration;

}

/// ***** tried map went back to for loop **** ////

		// const nextGeneration =  tiles.map( (row, i, array ) => {
		// 	return row.map( (tile, j) => {
		// 		if(tile.cell === true) {
		// 			// count live neighbours
		// 			const neighbours = countLiveNeighbours(j, i);
		// 			console.log(`cell is alive with ${neighbours} neighbour cells`);			
					
		// 			// Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
		// 			if(neighbours < 2 || neighbours > 3) {
		// 				console.log('killing cell')
		// 				return {
		// 					id: tile.id,
		// 					cell: tile.cell = false,
		// 				}
		// 			} else {
		// 				console.log('cell lives on!')
		// 				return {
		// 					id: tile.id,
		// 					cell: tile.cell = true,
		// 				}
		// 			}
									
		// 		} else if(tile.cell === false) {
		// 			const deadCellNeighbours = countLiveNeighbours(j, i);
		// 			console.log(`cell is dead with ${deadCellNeighbours} neighbour cells`);		
		// 			if(deadCellNeighbours === 3) {
		// 				console.log('cell alive as if by reproduction');
		// 				return {
		// 					id: tile.id,
		// 					cell: tile.cell = true,
		// 				}
		// 			} else {
		// 				console.log('unchanged')
		// 				return {
		// 					id: tile.id,
		// 					cell: tile.cell = false,
		// 				}						
		// 			}
					
		// 		}				
		// 	})
		// })
		
		// console.log(nextGeneration);
		// return nextGeneration;
					
