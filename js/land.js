/**
 * Created by Administrator on 2017/9/1.
 */
function Land (option){
    this.ctx = option.ctx;
    this.landImg = option.img;
    this.canvasX = option.canvasX;
    this.canvasY = option.canvasY;

    this.speed = 2;
    this.width = option.img.width;
}
Land.prototype = {
    constructor:Land,
    drawLand:function(){
        this.canvasX -= this.speed;
        if(this.canvasX < - this.width){
            this.canvasX += (4 * this.width);
        }
        this.ctx.drawImage(this.landImg,this.canvasX,this.canvasY);
    }
}