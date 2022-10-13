
// TIMER
const deathline = '2022-02-24';

function getTimeRemaining(endtime) {
    const t = Date.parse(new Date()) - Date.parse(endtime) - 18000000;
    let   days = 0,
          hours = 0,
          minutes = 0,
          seconds = 0;

    if (t > 0) {
        days = Math.floor(t / 1000 / 60 / 60 / 24); 
        hours = Math.floor(t / 1000 / 60 / 60 % 24);
        minutes = Math.floor(t / 1000 / 60 % 60);
        seconds = Math.floor(t / 1000 % 60);
    }

    return {
        'total' : t,
        'days' : days,
        'hours' : hours,
        'minutes' : minutes,
        'seconds' : seconds
    };
}

function setZero(num) {
    if (num > 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}

function setClock(selector, endtime){
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000);


    function updateClock(){
        const t = getTimeRemaining(endtime);
        if(t.total <= 0){
            clearInterval(timeInterval);
        }
        days.innerHTML =  setZero(t.days);
        hours.innerHTML =  setZero(t.hours);
        minutes.innerHTML =  setZero(t.minutes);
        seconds.innerHTML =  setZero(t.seconds);
    } 
    updateClock();      
}

setClock('.timer', deathline);

// TOGGER
const chk = document.getElementById('chk');

var black = true;

chk.addEventListener('change', () => {

    
// BUTTOM
    document.body.classList.toggle('light');
    document.querySelector('#lable').classList.toggle('blue');
    document.querySelector('#ball').classList.toggle('black');

// NAME
    document.querySelector('#name').classList.toggle('black');
    document.querySelector('#block').classList.toggle('black');
    document.querySelector('#mrg').classList.toggle('black');

// NAME CONTENT
    document.querySelector('#days_content').classList.toggle('black');
    document.querySelector('#hours_content').classList.toggle('black');
    document.querySelector('#minutes_content').classList.toggle('black');
    document.querySelector('#seconds_content').classList.toggle('black');

// TIMER
    document.querySelector('#days').classList.toggle('white');
    document.querySelector('#hours').classList.toggle('white');
    document.querySelector('#minutes').classList.toggle('white');
    document.querySelector('#seconds').classList.toggle('white');

// LINE
    document.querySelector('#w_line').classList.toggle('black');

// SOCIAL
if (black) {
    document.querySelector('#instagram').src = './icons/instagram-logo-black.png'
    document.querySelector('#facebook').src = './icons/facebook-logo-black.png'
    document.querySelector('#linkedin').src = './icons/linkedin-logo-black.png'
    black=false
}
else {
    document.querySelector('#instagram').src = './icons/instagram-logo-white.png'
    document.querySelector('#facebook').src = './icons/facebook-logo-white.png'
    document.querySelector('#linkedin').src = './icons/linkedin-logo-white.png'
    black=true
}
    
});





