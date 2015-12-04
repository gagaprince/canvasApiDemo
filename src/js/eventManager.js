function EventManager(){
    if(!(this instanceof EventManager)){
        return new EventManager();
    }else{
        this.init();
    }
}
EventManager.prototype={
    eventList:null,
    canvas:null,
    init:function(){
        this.eventList=[];
        this.canvas = document.getElementById("gameCavas");
        this.beginListener();
    },
    beginListener:function(){
        var _this = this;
        this.canvas.addEventListener("touchstart",function(e){
            _this.fireEvent("touchstart",e);
        },false);
        this.canvas.addEventListener("touchmove",function(e){
            _this.fireEvent("touchmove",e);
        },false);
        this.canvas.addEventListener("touchend",function(e){
            _this.fireEvent("touchend",e);
        },false);
    },
    fireEvent:function(type,e){
        var eventList = this.eventList;
        var event = eventList[0];
        for(var i=0;event;event=eventList[++i]){
            if(event.type==type){
                event.eventCall.call(event.target,e);
            }
        }
    },
    addListener:function(type,eventCall,target){
        var eventItem = {
            type:type,
            eventCall:eventCall,
            target:target
        };
        this.eventList.push(eventItem);
        return eventItem;
    },
    removeListener:function(eventItem){
        var eventList = this.eventList;
        var event = eventList[0];
        for(var i=0;event;event = eventList[++i]){
            if(event==eventItem){
                eventList.splice(i,1);
                break;
            }
        }
    }
}