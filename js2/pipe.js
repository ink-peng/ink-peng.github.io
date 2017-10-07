/**
 * Created by Administrator on 2017/9/28.
 */
function Pipe(option){
    this.ctx = option.ctx;
    this.topImg = option.topImg;
    this.bottomImg = option.bottomImg;
    this.x = option.x;

    this.topY = 0;
    this.bottomY = 0;
    this.space = 150;
    this.speed = 2;

    this.getY();
}
Pipe.prototype = {
    constructor:Pipe,
    drawPipe:function(){
        this.x -= this.speed;
        if(this.x < - this.topImg.width * 3){
            this.x += 6 * (this.topImg.width * 3);
            /*当管道追加到最后的时候，需要重新计算Y坐标值，否则就与之前完全一样*/
            this.getY();
        }

        this.ctx.drawImage(this.topImg,this.x,this.topY);
        this.ctx.rect(this.x,this.topY,this.topImg.width,this.topImg.height);

        this.ctx.drawImage(this.bottomImg,this.x,this.bottomY);
        this.ctx.rect(this.x,this.bottomY,this.bottomImg.width,this.bottomImg.height);
    },
    /*获取管道的Y坐标值*/
    getY:function(){
        this.topY = -(Math.random() * 240 + 130);
        this.bottomY = this.topY + this.topImg.height + this.space;
    }
}