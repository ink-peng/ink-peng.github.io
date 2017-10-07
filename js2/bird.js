/**
 * Created by Administrator on 2017/9/28.
 */
function Bird(option){
    this.ctx = option.ctx;
    this.birdImg = option.birdImg;
    this.canvasX = option.canvasX;
    this.canvasY = option.canvasY;

    this.birdW = option.birdImg.width / 3 ;
    this.birdH = option.birdImg.height;
    this.birdX = 0;
    this.birdY = 0;
    this.birdSpeed = 0;
    this.maxAngle = 45;
    this.maxSpeed = 0.5;
    this.g = 0.0003;
    this.birdIndex = 0;
}

Bird.prototype = {
    constructor:Bird,
    drawBird:function(offsetTime){
        /*计算小鸟的水平坐标*/
        this.birdX = this.birdIndex * this.birdW;
        /*实现小鸟下落*/
        {
            /*加快重力加速度公式：
             * S = V0 * t + g * t * t / 2
             * 上一次的末速度就是下一次的初速度
             * Vt = V0 + g * t*/
            /*计算小鸟的速度*/
            this.birdSpeed = this.birdSpeed + this.g * offsetTime;
            /*计算某个时间间隔内的移动的距离*/
            var distanceY = this.birdSpeed * offsetTime + this.g * offsetTime * offsetTime / 2;
            this.canvasY += distanceY;
        }
        /*实现小鸟下落过程中的头部旋转*/
        /*计算下落过程中小鸟的头部需要旋转的角度*/
        var currentAngle = this.birdSpeed * this.maxAngle / this.maxSpeed;

        /*状态保持:因为变换会影响之后的图形的绘制*/
        this.ctx.save();
        /*旋转只能围绕canvas的原点进行旋转，所以旋转大多需要先translate来设置设置原点参照*/
        this.ctx.translate(this.canvasX + this.birdW / 2,this.canvasY + this.birdH / 2);
        this.ctx.rotate(Math.PI / 180 * currentAngle);
        /*因为你想裁切图片素材中的某一部分，所以使用九参模式*/
        this.ctx.drawImage(this.birdImg,this.birdX,this.birdY,this.birdW,this.birdH,- this.birdW / 2,- this.birdH / 2,this.birdW,this.birdH);
        /*状态恢复*/
        this.ctx.restore();
        /*变换索引*/
        this.birdIndex++;
        if(this.birdIndex > 2){
            this.birdIndex = 0;
        }
    }
}