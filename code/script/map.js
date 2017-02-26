var maps = [];

function Map(height, width) {

	this.current = true;

	this.xMax = width;
	this.yMax = height;


	this.init = function() {
		maps.push(this);
		console.log("init");
		this.tiles = new Array(this.xMax).fill(new Array(this.yMax));

		for (var x = 0; x < this.xMax; x++) {
			for (var y = 0; y < this.yMax; y++) {
				this.tiles[x][y] = tiles[0];
			}
		}
	};

	this.render = function() {
		console.log("render");
		for (var x = 0; x < this.xMax; x++) {
			for (var y = 0; y < this.yMax; y++) {
				if (this.tiles[x][y] === tiles[0]) {
					tiles[0].texture.draw(x * scale, y * scale);
				}
			}
		}
	};
}