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

var pixelsToVW = (pixels) => {
	let vw = pixels * (100 / window.innerWidth);
	return Math.round(vw);
}

var vwToPixels = (vw) => {
	let pixels = ((vw * window.innerWidth) / 100 );
	return pixels;
}

var vhToPixels = (vh) => {
	let pixels = ((vh * window.innerHeight) / 100 );
	return pixels;
}

var pixelsToVH = (pixels) => {
	let vh = pixels * (100 / window.innerHeight);
	return Math.round(vh);
}

module.exports = {
	pixelsToREM,
	remToPixels,
	remToVH,
	remToVW,
	vhToREM,
	vwToREM,
	pixelsToVH,
	pixelsToVW,
	vhToPixels,
	vwToPixels,
};