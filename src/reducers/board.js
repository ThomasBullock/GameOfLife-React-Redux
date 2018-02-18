import { lifeCycle, activateCell } from '../modules/lifeCycle';
import {  getPreset } from '../modules/presets';

const createCell = (j, i, size, reset) => {
	const alive = Math.random() <= 0.2;
	// console.log('createCell size is ' + size)
	return {
		id: j + (i * size),
		cell: (reset) ? false : alive
	}
}

const generateTiles = (size, reset) => {
	// create array
	// console.log(reset)
	const tileArr = [];
	// add an array for each row size times
	
	for(let i = 0; i < size / 2; i++) {
		tileArr[i] = [];
		for(let j = 0; j < size; j++) {
			tileArr[i].push( (reset) ? createCell(j, i, size, reset) : createCell(j, i, size) );
		}
	}
	
	return tileArr;
}

const size = 50;

const initialState = {
	size: size,
	tiles: generateTiles(size),
	generation: 0
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
        tiles: generateTiles(state.size, true), 
        generation: 0
      });     	  
    case 'STEP':
     	// console.log(JSON.stringify(state.tiles))
			return Object.assign({}, state, {
        size: state.size,
        tiles: lifeCycle(state.tiles),
        generation: state.generation + 1
      });
    case 'ACTIVATE_CELL': 	   	
			return Object.assign({}, state, {
        size: state.size,
        tiles: activateCell(state.tiles, action.id, state.size)
      });
     case 'LOAD_PRESET':
     	return Object.assign({}, state, {
     		tiles: getPreset(action.preset, state.size),
     		generation: 0
     	}) 
		default:
			return state;
	}
}

export default board;