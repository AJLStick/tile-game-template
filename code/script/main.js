window.onload = function() {
	init();
};

var scale = 50;

function init() {
	gameView = document.getElementById("game-view");
	renderer = gameView.getContext("2d");

	mainMap = new Map(16, 16);
	mainMap.init();

	renderer.fillStyle = 'black';
	renderer.fillRect(0, 0, gameView.width, gameView.height);

	maps[0].render();
	setInterval(tick, 1000);
}

function tick() {
	for (var i = 0; i < maps.length; i++) {
		if (maps[i].current === true) {
			maps[i].render();
		}
	}
}