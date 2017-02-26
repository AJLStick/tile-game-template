var tiles = [];

function Tile(xOffset, yOffset) {

	this.texture = new Sprite(spriteSheet, xOffset, yOffset);

	this.init = function() {
		tiles.push(this);	
	};
}