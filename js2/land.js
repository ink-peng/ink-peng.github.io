/**
 * Created by Administrator on 2017/9/28.
 */
function Land(option){
    this.ctx = option.ctx;
    this.landImg = option.landImg;
    this.x = option.x;
    this.y = option.y;

    this.speed = 2;
}

Land.prototype = {
    constructor:Land,
    drawLand:function(){
        this.x -= this.speed;
        if(this.x < - this.landImg.width){
            this.x += 4 * this.landImg.width;
        }
        this.ctx.drawImage(this.landImg,this.x,this.y)
    }
}