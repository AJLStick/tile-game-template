var maps = [];

function Map(height, width) {

	this.current = true;

	this.width = width;
	this.height = height;


	this.init = function() {
		maps.push(this);
		console.log("init");
		this.tiles = new Array(this.height).fill(new Array(this.width));

		for (var y = 0; y < this.height; y++) {
			for (var x = 0; x < this.width; x++) {
				this.tiles[x][y] = tiles[Math.floor(Math.random() * tiles.length)];
			}
		}
	};

	this.render = function() {
		console.log("render");
		for (var y = 0; y < this.height; y++) {
			for (var x = 0; x < this.width; x++) {
				if (this.tiles[x][y] === tiles[0]) {
					tiles[0].texture.draw(x * scale, y * scale);
				} else if (this.tiles[x][y] === tiles[1]) {
					tiles[1].texture.draw(x * scale, y * scale);
				}
			}
		}
	};
}