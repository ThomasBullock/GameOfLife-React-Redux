import { combineReducers } from 'redux';
import controls from './controls';
import board from './board';

const rootReducer = combineReducers({
	controls,
	board
})

export default rootReducer;