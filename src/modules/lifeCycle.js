import { cloneDeep, isEqual } from 'lodash';

export const lifeCycle = (tiles) => {
	// console.log(tiles)
	const nextGeneration = cloneDeep(tiles);
	const getNeighbourLocations = (x, y) => {
		let yNeg = y - 1;
		let yPos = y + 1;
		let xNeg = x - 1;
		let xPos = x + 1;
		// adjust for edge of board
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
		// return an array containing all the cells neighbouring cells
		return [ 
			{x: xNeg, y: yNeg}, // top row
			{x: x, y: yNeg},
			{x: xPos, y: yNeg},
			{x: xPos, y: y},  // right side
			{x: xPos, y: yPos}, // bottom row
			{x: x, y: yPos},
			{x: xNeg, y: yPos},
			{x: xNeg, y: y}  // left side
		];
	}

	const countLiveNeighbours = (x, y) => {
		return getNeighbourLocations(x, y).map( (loc) => tiles[loc.y][loc.x])
		.reduce( (accum, next ) => {
			return (next.cell) ? (accum + 1) : (accum); 
		}, 0);
	} 
		
	// cycle through rows with for loop for efficiency over map
	for(let i = 0; i < tiles.length; i ++) {
	// cycle through cells
		for(let j = 0; j <  tiles[i].length; j++) {
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
				// console.log(neighbours);
				if(neighbours === 3) {
					nextGeneration[i][j].cell = true;
				} else {
						// console.log('unchanged')
						nextGeneration[i][j].cell = false;
					}
			}
		}		
	}	
	return nextGeneration;
}

						
export const activateCell = (tiles, id, size) => {
	const col = id % size;
	const row = (id - col) / (size);
	// console.log(`row ==  ${id} - ${col} / ${size}` )
	tiles[row][col].cell = true;
	return cloneDeep(tiles);
}
