$(document).ready(function(){
    var drawUtil = DrawUtil();
//    drawUtil.fillRectByColor(10,10,200,200,"#123456");
//    drawUtil.drawLine(10,220,200,420,"#ff0000");
//    drawUtil.drawCircle(100,300,80);
//    drawUtil.drawText(100,300,"中国","32px Arial");
//
//    var imgSrc = "src/res/test1.jpg";
//    drawUtil.drawImage(imgSrc,0,0,440,391,50,50,220,110);

    var animateUtil = AnimateUtil();

    var beginP = Point(10,10);
    var endP = Point(50,50);
    var fireP = Point(10,10);

//    drawUtil.fillRectByColor(fireP.getX(),fireP.getY(),200,200,"#123456");

    /*animateUtil.move(beginP,endP,fireP,3,function(){
        drawUtil.clear();
        drawUtil.fillRectByColor(fireP.getX(),fireP.getY(),200,200,"#123456");
    });*/

    /*animateUtil.rotate(0,2*Math.PI,2,function(rad){
        drawUtil.clear();
        drawUtil.fillRectByColorAndRad(50,50,200,200,"#123456",rad);
    });*/

    /*animateUtil.scale(1,2,4,function(scale){
        drawUtil.clear();
        drawUtil.fillRectByColorAndScale(50,50,200,200,"#123456",scale);
    });*/

    drawUtil.fillRectByColor(50,400,200,100);
    drawUtil.fillRectByColor(fireP.getX(),fireP.getY(),200,200,"#123456");

    var eventManager = EventManager();
    eventManager.addListener("touchend",function(e){
        var touchEvent = e.changedTouches[0];
        var locationX = touchEvent.clientX,locationY = touchEvent.clientY;
        if(locationX>50&&locationX<250&&locationY>400&&locationY<500){
            animateUtil.move(beginP,endP,fireP,3,function(){
                drawUtil.clear();
                drawUtil.fillRectByColor(50,400,200,100);
                drawUtil.fillRectByColor(fireP.getX(),fireP.getY(),200,200,"#123456");
            });;
        }
    },this);
});