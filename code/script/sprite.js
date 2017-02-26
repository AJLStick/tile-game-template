function Sprite(spriteSheet, xOffset, yOffset){
    this.spriteSheet = spriteSheet;
    this.xOffset = xOffset;
    this.yOffset = yOffset;

    this.draw = function(x, y) {
        renderer.drawImage(this.spriteSheet, this.xOffset, this.yOffset, 8, 8, x, y, scale, scale);
    };
}