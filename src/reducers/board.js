import { lifeCycle, activateCell } from '../modules/lifeCycle';

const createCell = (j, i, size, reset) => {
	const alive = Math.random() <= 0.3;
	// console.log('createCell size is ' + size)
	return {
		id: j + (i * size),
		cell: (reset) ? false : alive
	}
}

const generateTiles = (size, reset) => {
	// create array
	// console.log(reset)
	const tileArr = new Array;
	// add an array for each row size times
	
	for(let i = 0; i < size / 2; i++) {
		tileArr[i] = new Array;
		for(let j = 0; j < size; j++) {
			// console.log((reset) ? createCell(j, i, size, reset) : createCell(j, i, size) )
			tileArr[i].push( (reset) ? createCell(j, i, size, reset) : createCell(j, i, size) );
		}
	}
	
	return tileArr;
}

const clearTiles = (size) => {
	console.log('in clear tile')
	console.log(size)
	const tileArr = new Array;
	// add an array for each row size times
	for(let i = 0; i < size / 2; i++) {
		console.log('in clear tile for')
		tileArr[i] = new Array;
		for(let j = 0; j < size; j++) {
			console.log('add a tile' )
			tileArr[i].push( 
				{
					id: j + (i * size),
					cell: false
				}
			);
		}
	}
	return tileArr;
}

const turn = (tiles) => {
	console.log(tiles);
	return tiles.map( (row) => {
		return row.map( (tile) => {
			return {
				id: tile.id,
				cell: !tile.cell
			}
		})
	})
} 

const size = 20;

const initialState = {
	size: size,
	tiles: generateTiles(size)
}

const board = (state = initialState, action) => {
	switch (action.type) {
		case 'INIT':
			return state;					
		case 'CHANGE_SIZE':
			return Object.assign({}, state, {
        size: action.size,
        tiles: generateTiles(action.size)
      }); 
    case 'RESET': 
			return Object.assign({}, state, {
        size: state.size,
        tiles: generateTiles(state.size, true)
      });     	  
    case 'STEP':
     // console.log('steppin')
			return Object.assign({}, state, {
        size: state.size,
        tiles: lifeCycle(state.tiles)
      });
    case 'ACTIVATE_CELL': 	   	
			return Object.assign({}, state, {
        size: state.size,
        tiles: activateCell(state.tiles, action.id, state.size)
      });
		default:
			return state;
	}
}

export default board;