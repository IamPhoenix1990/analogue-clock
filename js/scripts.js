let objClock={
    init:function(){
        this.objHourHand = document.querySelector('.hourHand');
        this.objMinuteHand = document.querySelector('.minuteHand');
        this.objSecondHand = document.querySelector('.secondHand');
        console.log(this);
    }
}
//init is initalization function, everything else will have function of its own which gets called accordingly   
objClock.init();
