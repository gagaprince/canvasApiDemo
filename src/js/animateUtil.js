function AnimateUtil(){
    if(!(this instanceof AnimateUtil)){
        return new AnimateUtil();
    }else{
        this.init();
    }
}
AnimateUtil.prototype={
    fps:0,//变换频率 也可以叫重绘频率 含义是1s中重绘多少次
    fpt:100000, //重绘时间间隔 和fps互为倒数
    tasks:[],   //任务集合
    init:function(){
        this.fps=60
        this.fpt = 1/this.fps;
        this._beginTask();
    },
    //将fireP的坐标 从 beginP 变到endP 在t s时间内
    //默认变换频率为1/60s
    move:function(beginP,endP,fireP,t,call){
        var timeCount = new Date().getTime();   //记录开始的时间点
        var timeLength = t*1000;                //记录时间长度

        var beginX = beginP.getX();
        var endX = endP.getX();
        var lengthX = endX-beginX;
        var rateX = lengthX/timeLength;

        var beginY = beginP.getY();
        var endY = endP.getY();
        var lengthY = endY - beginY;
        var rateY = lengthY/timeLength;


        var _this = this;
        this._addTask(function(){
            var timeNow = new Date().getTime();
            var timeStep = timeNow-timeCount;
            if(timeStep>timeLength){//此时说明已经超过动画运行时间
                fireP.set(endP.getX(),endP.getY());
                //remove task
                _this._removeTask(arguments.callee);
            }else{//计算出fireP的坐标
                var fireX = beginX + rateX*timeStep;
                var fireY = beginY + rateY*timeStep;
                fireP.set(fireX,fireY);
            }
            if(call){
                call();
            }
        });
    },
    //旋转
    //传入的角度是数字
    rotate:function(beginR,endR,t,call){
        var timeCount = new Date().getTime();   //记录开始的时间点
        var timeLength = t*1000;                //记录时间长度

        var lengthR = endR-beginR;
        var rate = lengthR/timeLength;

        var _this = this;
        this._addTask(function(){
            var timeNow = new Date().getTime();
            var timeStep = timeNow-timeCount;
            var nowR;
            if(timeStep>timeLength){//此时说明已经超过动画运行时间
                nowR = endR;
                //remove task
                _this._removeTask(arguments.callee);
            }else{//计算出新的角度值
                nowR = beginR + rate*timeStep;
            }
            if(call){
                call(nowR);
            }
        });
    },
    //放缩
    scale:function(beginS,endS,t,call){
        var timeCount = new Date().getTime();   //记录开始的时间点
        var timeLength = t*1000;                //记录时间长度

        var lengthS = endS-beginS;
        var rate = lengthS/timeLength;

        var _this = this;
        this._addTask(function(){
            var timeNow = new Date().getTime();
            var timeStep = timeNow-timeCount;
            var nowS;
            if(timeStep>timeLength){//此时说明已经超过动画运行时间
                nowS = endS;
                //remove task
                _this._removeTask(arguments.callee);
            }else{//计算出新的角度值
                nowS = beginS + rate*timeStep;
            }
            if(call){
                call(nowS);
            }
        });
    },
    //开始任务
    _beginTask:function(){
        var _this = this;
        setInterval(function(){
            var tasks = _this.tasks;
            var task = _this.tasks[0];
            for(var i=0;task;task=tasks[++i]){
                task();
            }
        },this.fpt);
    },
    //加入任务
    _addTask:function(task){
        this.tasks.push(task);
    },
    //移除任务
    _removeTask:function(taskTarget){
        var tasks = this.tasks;
        var task = tasks[0];
        for(var i=0;task;task = tasks[++i]){
            if(task == taskTarget){
                tasks.splice(i,1);
                break;
            }
        }
    }
}

function Point(x,y){
    if(!(this instanceof Point)){
        return new Point(x,y);
    }else{
        this.init(x,y);
    }
}
Point.prototype = {
    _x:-1000,
    _y:-1000,
    init:function(x,y){
        this._x = x;
        this._y = y;
    },
    set:function(x,y){
        this._x = x;
        this._y = y;
    },
    getX:function(){
        return this._x;
    },
    getY:function(){
        return this._y;
    }
}