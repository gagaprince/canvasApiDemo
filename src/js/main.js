$(document).ready(function(){
    var drawUtil = DrawUtil();
    drawUtil.fillRectByColor(10,10,200,200,"#123456");
    drawUtil.drawLine(10,220,200,420,"#ff0000");
    drawUtil.drawCircle(100,300,80);
    drawUtil.drawText(100,300,"中国","32px Arial");

    var imgSrc = "src/res/test1.jpg";
    drawUtil.drawImage(imgSrc,0,0,440,391,50,50,220,110);
});