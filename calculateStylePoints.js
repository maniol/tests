// calculateStylePoints.js
const calculateStylePoints = (styleNotes) => {
	const max = Math.max(...styleNotes);
	const min = Math.min(...styleNotes);
	let total = styleNotes.reduce((a,b) => a + b, 0)
	return total -= (min + max);

};

module.exports = calculateStylePoints;