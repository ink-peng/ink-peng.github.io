/**
 * Created by Administrator on 2017/9/1.
 */
function Sky(option){
    this.ctx = option.ctx;
    this.skyImg = option.img;
    this.x = option.x;
    this.y = option.y;

    this.speed = 2;
    this.width = option.img.width;
}

Sky.prototype = {
    constructor:Sky,
    drawSky:function(){
        this.x -= this.speed;
        if(this.x < - this.width){
            this.x += (this.width * 2);
        }
        this.ctx.drawImage(this.skyImg,this.x,this.y);
    }
}