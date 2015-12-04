/*
* 这是一个使用canvasApi的画图工具
* */
function DrawUtil(){
    if(!(this instanceof  DrawUtil)){
        return new DrawUtil();
    }else{
        this.init();
    }
}
DrawUtil.prototype={
    canvas:null,
    ctx:null,
    width:0,
    height:0,
    init:function(){
        this.canvas = document.getElementById("gameCavas");
        this.ctx = this.canvas.getContext("2d");
        this.width = this.canvas.width;
        this.height = this.canvas.height;
    },
    //绘制一个矩形
    //起始点坐标
    //宽度 高度
    //颜色
    fillRectByColor:function(beginX,beginY,width,height,color){
        var ctx = this.ctx;
        ctx.save();
        ctx.fillStyle=color||"#000";
        ctx.fillRect(beginX,beginY,width,height);
        ctx.restore();
    },
    //画线
    drawLine:function(beginX,beginY,endX,endY,color){
        var ctx = this.ctx;
        ctx.save();
        ctx.strokeStyle = color||"#123456";
        ctx.beginPath();
        ctx.moveTo(beginX,beginY);
        ctx.lineTo(endX,endY);
        ctx.stroke();
        ctx.restore();
    },
    //画圆
    drawCircle:function(beginX,beginY,r,color){
        var ctx = this.ctx;
        ctx.save();
//        ctx.strokeStyle = color||"#000";
        ctx.beginPath();
        ctx.arc(beginX,beginY,r,0,2*Math.PI);
        ctx.stroke();
        ctx.restore();
    },
    //写文字
    drawText:function(beginX,beginY,text,font){
        var ctx = this.ctx;
        ctx.save();
        ctx.font = font||"40px Arial";
        ctx.fillText(text,beginX,beginY);
        ctx.restore();
    },
    //画图片
    drawImage:function(imgsrc,sx,sy,swidth,sheight,x,y,width,height){
        var ctx = this.ctx;
        this._loadImg(imgsrc,function(img){
            ctx.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
        },function(){
            alert("load img error");
        });
    },
    _loadImg:function(imgSrc,onLoad,onError){
        var img = new Image();
        img.src = imgSrc;
        img.addEventListener("load",function(){
            onLoad(img);
        },false);
        img.addEventListener("error",function(){
            onError();
        })
    },
    //清除屏幕
    clear:function(){
        this.fillRectByColor(0,0,this.width,this.height,"#ffffff");
    }
}
