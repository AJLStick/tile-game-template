function Sprite(spriteSheet, width, height, xOffset, yOffset){
    this.spriteSheet = spriteSheet;
    this.width = width;
    this.height = height;
    this.xOffset = xOffset;
    this.yOffset = yOffset;

    this.draw = function(x, y) {
        renderer.drawImage(this.spriteSheet, this.xOffset, this.yOffset, 8, 8, x, y, this.width,this.height);
    };
}
