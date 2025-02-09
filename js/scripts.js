let objClock = {
    init:function(){
        this.selectingElements();
        this.getCurrentTime();
        this.calculatingAngles();
        this.adjustHands();
        console.log(this);
    },
    selectingElements:function(){
        this.objHourHand = document.querySelector('.hourHand');
        this.objMinuteHand = document.querySelector('.minuteHand');
        this.objSecondHand = document.querySelector('.secondHand');
    },
    getCurrentTime:function(){
        let now = new Date();
        this.hours = now.getHours();
        this.minutes = now.getMinutes();
        this.seconds = now.getSeconds();
    },
    calculatingAngles:function(){
        this.secondsAngle = (this.seconds/60) * 360;
        this.minutesAngle = this.calculateMinuteAngle();
    },
    calculateMinuteAngle:function(){
        let currentSeconds = this.minutes * 60;
        currentSeconds = currentSeconds + this.seconds;
        let percentage = currentSeconds / 3600;
        let angle = percentage * 360;
        return angle;

    }, 
    adjustHands:function(){
        this.objSecondHand.style.transform = 'rotate('+this.secondsAngle+'deg)';
        this.objMinuteHand.style.transform = 'rotate('+this.minutesAngle+'deg)';
    }

}
//init is initalization function, everything else will have function of its own which gets called accordingly   
objClock.init();
