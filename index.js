const formatDate = (timeInSeconds) => {
	const hours = Math.floor(timeInSeconds / 3600);
	const minutes = Math.floor(timeInSeconds % 3600 / 60);
	const seconds = Math.floor(timeInSeconds % 3600 % 60);
	if(timeInSeconds < 60 && timeInSeconds > 0) {
		return `${timeInSeconds}s`
	} else if(timeInSeconds >= 60 && timeInSeconds < 3600) {
		if(seconds === 0) {
			return `${minutes}m`
		} else {
			return `${minutes}m ${seconds}s`
		}
	} else if (timeInSeconds >=3600) {
		if (minutes === 0 && seconds === 0) {
			return `${hours}h`
		} else if (minutes === 0 && seconds !== 0) {
			return `${hours}h ${seconds}s`
		} else if (minutes !== 0 && seconds == 0) {
			return `${hours}h ${minutes}m`
		}
		else if ( hours !== 0 && minutes !== 0 && seconds !== 0) {
			return `${hours}h ${minutes}m ${seconds}s`
		}
	} else {
		return '0s'
	}
}

module.exports = formatDate;