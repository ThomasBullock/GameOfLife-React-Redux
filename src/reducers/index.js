import { combineReducers } from 'redux';
import controls from './controls';
import counter from './counter';
import board from './board';

const rootReducer = combineReducers({
	controls,
	counter,
	board
})

export default rootReducer;