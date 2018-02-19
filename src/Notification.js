function announce (msg) {
	alert(msg);
}

function log (msg) {
	console.log(msg);
}

export default {
	announce: announce,
	log: log,
}