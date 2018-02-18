import { sizes } from '../modules/sizes';
import { invert } from 'lodash';

var data = require('../data/presets.json');

export const getPreset = (preset, size) => {
	const sizeString = invert(sizes)[size]
	return data[preset][sizeString]; 
}