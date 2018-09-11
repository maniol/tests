// calculateDistancePoints.js
const calculateDistancePoints = (distance, hillSize, kPoint) => {
	let base = 60;
	let distancePoints = 0;
	if (hillSize === 'huge') {
		base = 120;
	}
	const kPointDelta = distance - kPoint;
	if (hillSize == 'normal') {
		distancePoints = kPointDelta * 2;
	} else if (hillSize == 'big') {
		distancePoints = kPointDelta * 1.8;
	} else {
		distancePoints = kPointDelta * 1.2;
	}
	return base + distancePoints;
};


module.exports = calculateDistancePoints;