window.onload = function() {
	init();
};

var scale = 50;
var lastTime;
var currentFps;
var maxFps = 60;
var df = 0;
var fpsView;

var spriteSheet = new Image();

function init() {
	gameView = document.getElementById("game-view");
	renderer = gameView.getContext("2d");
	renderer.imageSmoothingEnabled = false;
	fpsView = document.getElementById("fps");
	spriteSheet.src = "../code/img/spritesheet.png";

	var grass = new Tile(0, 0);
	grass.init();
	var dirt = new Tile(8, 0);
	dirt.init();

	mainMap = new Map(16, 16);
	mainMap.init();

	maps[0].render();
	gameLoop();
}

function tick() {
	
}

function render() {
	for (var i = 0; i < maps.length; i++) {
		if (maps[i].current === true) {
			maps[i].render();
		}
	}

}


function gameLoop() {
	var now = Date.now();
	var dt = (now - lastTime) / 1000;
	df++;

	if (df >= 20) {
		fpsView.innerHTML = Math.floor(currentFps);
		df = 0;
	}

	currentFps = 1/dt;

	render();
	tick();

	lastTime = now;
	window.requestAnimationFrame(gameLoop);
}