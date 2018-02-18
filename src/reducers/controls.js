
const initialState = {
	isPlaying: false,
	interval: 150,
	timerId: null
}

const controls = (state = initialState, action) => {
	switch (action.type) {
		case 'START':
			return Object.assign({}, state, {
				isPlaying: true,
				timerId: action.timerId
			});
		case 'PAUSE':
			return Object.assign({}, state, {
				isPlaying: false,
				timerId: null
			});	
		case 'RESET':
			return state;
		case 'ADJUST_SPEED':
			// console.log(state.timerId)
			return Object.assign({}, state, {
				interval: action.interval
			});						
		default:
			return state;
	}
}

export default controls;