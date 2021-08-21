class Player {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.player = createSprite(x,y,50,50);
        this.player.addImage(planeimg);
        this.player.scale = 0.5;
    }
    
};
