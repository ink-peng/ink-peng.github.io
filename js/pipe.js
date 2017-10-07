/**
 * Created by Administrator on 2017/9/1.
 */
function Pipe(option){
    this.ctx = option.ctx;
    this.topImg = option.topImg;
    this.bottomImg = option.bottomImg;
    this.x = option.x;

    this.imgW = option.topImg.width;
    this.imgH = option.topImg.height;
    this.space = 150;
    this.getY();
    this.speed = 2;
}

Pipe.prototype = {
    constructor:Pipe,
    drawPipe:function(){
        console.log(this.topY);
        this.x -= this.speed;
        if(this.x < -this.imgW * 3){
            this.x += (this.imgW * 3 * 7);
            /*重新设置当前管道的Y坐标值*/
            this.getY();
        }
        /*绘制上方的管道*/
        this.ctx.drawImage(this.topImg,this.x,this.topY);
        /*绘制上方的管道的路径*/
        this.ctx.rect(this.x,this.topY,this.imgW,this.imgH);
        /*绘制下方的管道*/
        this.ctx.drawImage(this.bottomImg,this.x,this.bottomY);
        /*绘制下方的管道的路径*/
        this.ctx.rect(this.x,this.bottomY,this.imgW,this.imgH);
    },
    getY : function(){
        this.topY = - (Math.random() * 240 + 130);
        this.bottomY = this.topY + this.imgH + this.space;
    }
};