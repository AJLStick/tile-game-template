window.onload = function() {
	init();
};

var zoom = 4;

function init() {
	m = document.getElementById("map");
	renderer = m.getContext("2d");

	mainMap = new Map(10, 10);
	mainMap.init();

	renderer.fillStyle = 'black';
	renderer.fillRect(0, 0, m.width, m.height);

	setInterval(tick, 1000);
}

function tick() {
	for (var i = 0; i < maps.length; i++) {
		maps[i].render();
	}
	console.log(mainMap.tiles[4][5]);
}