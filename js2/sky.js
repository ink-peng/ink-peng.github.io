/**
 * Created by Administrator on 2017/9/28.
 */
function Sky(option){
    this.ctx = option.ctx;
    this.skyImg = option.skyImg;
    this.x = option.x;
    this.y = option.y;

    this.speed = 2;
}

Sky.prototype = {
    constructor:Sky,
    drawSky:function(){
        this.x -= this.speed;
        if(this.x <= - this.skyImg.width){
            this.x += 2 * this.skyImg.width;
        }
        this.ctx.drawImage(this.skyImg,this.x,this.y);
    }
}