class Timer {
    constructor(startTime = new Date().valueOf()) {
        this.startTime = startTime;
    }
    
    start(min, sec) {
        setInterval(() => this.run(min, sec), 100);
    }
    run(min, sec) {
        const currentTime = new Date().valueOf();
        const difference = Math.floor((currentTime - this.startTime) / 1000);
        const minutes = min || Math.floor(difference / 60);
        const seconds = sec || difference - minutes * 60;
        (parseInt(minutes) < 0) ? this.error() : this.success(minutes, seconds)
    }
    error() {
        clearInterval(null)
        self.postMessage({minutes: -1, seconds: -1})
    }
    success(minutes, seconds) {
        minutes = (minutes > 9) ? `${minutes}` : `0${minutes}`
        seconds = (seconds > 9) ? `${seconds}` : `0${seconds}`
        self.postMessage({minutes: minutes, seconds: seconds})
    }
}

t = new Timer();
t.start()