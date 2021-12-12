var hours = 0;
var minutes = 0;
var seconds = 0;

var time = 1000;
var cron;

function start() {
    cron = setInterval(timer, time);
}

function pause() {
    clearInterval(cron);
}

function stop() {
    clearInterval(cron);
    hours = 0;
    minutes = 0;
    seconds = 0;

    document.getElementById('counter').innerText = '00:00:00';
}

function timer() {
    seconds++;

    if(seconds == 60) {
        seconds = 0;
        minutes++;

        if(minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    let format = (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
    document.getElementById('counter').innerText = format;
}