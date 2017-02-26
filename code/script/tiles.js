var tiles = [];

function Tile() {

	this.texture = new Sprite(spriteSheet, scale, scale, 0, 0);

	this.init = function() {
		tiles.push(this);	
	};
}