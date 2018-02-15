export const start = (timerId) => {
	return {
		type: 'START',
		timerId
	}
}

export const pause = () => {
	return {
		type: 'PAUSE'
	}
}

export const reset = () => {
	return {
		type: 'RESET'
	}
}

export const changeSize = (size) => {
	return {
		type: 'CHANGE_SIZE',
		size: size
		
	}
}

export const step = () => {
	return {
		type: 'STEP'
	}
}

export const activateCell = (id) => {
	return {
		type: 'ACTIVATE_CELL',
		id
	}
}