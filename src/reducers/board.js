import { lifeCycle } from '../modules/lifeCycle';

const createCell = (j, i) => {
	const alive = Math.random() <= 0.2;
	return {
		id: j + (i * size),
		cell: alive
	}
}

const generateTiles = (size) => {
	// create array
	const tileArr = new Array;
	// add an array for each row size times
	
	for(let i = 0; i < size / 2; i++) {
		tileArr[i] = new Array;
		for(let j = 0; j < size; j++) {
			tileArr[i].push(createCell(j, i));
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
     case 'STEP':
     // console.log('steppin')
			return Object.assign({}, state, {
        size: state.size,
        tiles: lifeCycle(state.tiles)
      });      	   	
		default:
			return state;
	}
}

export default board;