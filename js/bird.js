/**
 * Created by Administrator on 2017/9/1.
 */
function Bird(option){
    this.ctx = option.ctx;
    this.birdImg = option.img;
    this.canvasX = option.canvasX;
    this.canvasY = option.canvasY;

    this.imgW = option.img.width / 3;
    this.imgH = option.img.height;
    this.index = 0;
    this.birdSpeed = 0;
    this.g = 0.0003;
    this.maxAngle = 45;
    this.maxSpeed = 0.4;
    /*this.imgX = 0;*/
}
Bird.prototype = {
    constructor : Bird,
    drawBird : function(offset){
        var imgX = this.index * this.imgW;
        var imgY = 0;

        /*计算指定时间间隔中小鸟移动的距离*/
        var distanceY = this.birdSpeed * offset + this.g * offset * offset / 2;
        /*计算下落过程中小鸟的下落的速度*/
        this.birdSpeed = this.birdSpeed + this.g * offset;
        /*设置小鸟在画布中的Y坐标*/
        this.canvasY += distanceY;

        /*绘制小鸟*/
        {
            /*旋转小鸟的头部*/
            var currentAngle =  this.birdSpeed *  this.maxAngle /  this.maxSpeed;
            if(currentAngle >  this.maxAngle){
                currentAngle =  this.maxAngle;
            }
            /*保存当前画布的原始状态*/
            this.ctx.save();
            /*先实现平移：因为旋转只能围绕canvas的原点来旋转，所以需要使用translate来设置canvas的新的原点参照*/
            this.ctx.translate( this.canvasX +  this.imgW / 2,  this.canvasY +  this.imgH / 2);
            /*实现旋转：只能围绕canvas的原点旋转*/
            this.ctx.rotate(Math.PI / 180 * currentAngle);
            /*this.ctx.drawImage(图片,图片x,图片y,图片w,图片h,canvasX,canvasY,canvas-img-w,canvas-img-h);*/
            this.ctx.drawImage(this.birdImg,imgX,imgY,this.imgW,this.imgH,-this.imgW / 2,-this.imgH / 2,this.imgW,this.imgH);
            /*恢复画布到上一次Save时的状态 == 原始状态*/
            this.ctx.restore();

            this.index ++;
            if( this.index > 2){
                this.index = 0;
            }
        }
    }
}