// also serves as EM units
var pixelsToREM = (pixels) => {
	let rem = pixels * 0.0625;
	return rem;
}

var remToPixels = (rem) => {
	let pixels = rem * 16;
	return pixels;
}

var remToVH = (rem) => {
	let vh = window.innerHeight / (rem * 16);
	return vh;
}

var vhToREM = (vh) => {
	let rem = window.innerHeight / (100 / vh) * 0.0625;
	return rem;
}

var remToVW = (rem) => {
	let vw = window.innerWidth / ( rem * 16 );
	return vw;
}

var vwToREM = (vw) => {
	let rem = window.innerWidth / (100 / vw) * 0.0625;
	return rem;
}

var pixelsToVH = (pixels) => {
	let result = pixels * (100 / window.innerHeight);
	return result;
}

var pixelsToVW = (pixels) => {
	let result = pixels * (100 / window.innerWidth);
	return result;
}

var vhToPixels = (vh) => {
	let result = vh * (100 / window.innerHeight);
	return result;
}

var vwToPixels = (vw) => {
	let result = vw * (100 / window.innerWidth);
	return result;
}

module.exports = {
	pixelsToREM,
	remToPixels,
	remToVH,
	vhToREM,
	remToVH,
	vwToREM,
	pixelsToVH,
	pixelsToVW,
	vhToPixels,
	vwToPixels,
};