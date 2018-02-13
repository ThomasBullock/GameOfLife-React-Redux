
const initialState = {
	turn: 0
}

const controls = (state = initialState, action) => {
	switch (action.type) {
		case 'STEP':
			return Object.assign({}, state, {
				turn: state.turn += 1
			})	
		case 'RESET':
			return state;						
		default:
			return state;
	}
}

export default controls;