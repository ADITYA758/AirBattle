class Enemy {
    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.enm = createSprite(x, y, width, height);
        this.enm.addImage(enemyImage);
        this.enm.scale = 0.5
        this.enm.velocityY = 5;
        

    }

};