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

export const adjustSpeed = (interval) => {
	return {
		type: 'ADJUST_SPEED',
		interval
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

export const loadPreset = (preset) => {
	return {
		type: 'LOAD_PRESET',
		preset
	}
}