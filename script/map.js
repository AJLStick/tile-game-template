var maps = [];

function Map(height, width) {
	this.tiles = [[]];
	this.init = function() {
		maps.push(this);
		console.log("init");
		this.tiles.fill('0');
	};
	this.render = function() {
		console.log("render");
		for (var x = 0; x < this.height; x++) {
			for (var y = 0; y < this.width; y++) {
				if (this.tiles[x][y] === '0') {
					console.log("0");
					renderer.fillStyle = 'green';
					renderer.fillRect(zoom * x, zoom * y, zoom, zoom);
				}
			}
		}
	};
}