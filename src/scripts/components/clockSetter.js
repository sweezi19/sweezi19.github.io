import {days, hours, minutes, seconds} from "../utils/constants.js"

// PASSED TIME GETTER
function getTimePassed(endtime) {
  const t = Date.parse(new Date()) - Date.parse(endtime) - 18000000;
  let days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0,
    weeks = 0;
  if (t > 0) {
    days = Math.floor(t / 1000 / 60 / 60 / 24);
    weeks = Math.floor(t / 1000 / 60 / 60 / 24 / 7);
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
// ZERO SETTER
export function setZero(num) {
  if (num > 0 && num < 10) {
      return `0${num}`;
  } else {
    return num;
    } 
}
// TIME SETTER
export function setClock(endtime){
  const timeInterval = setInterval(updateClock, 1000);
  function updateClock(){
    const t = getTimePassed(endtime);
    if (t.total <= 0) {
        clearInterval(timeInterval);
    }
    days.textContent = setZero(t.days);
    hours.textContent = setZero(t.hours);
    minutes.textContent = setZero(t.minutes);
    seconds.textContent = setZero(t.seconds);
  } 
  updateClock();      
}