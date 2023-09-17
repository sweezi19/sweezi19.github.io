import {
  body,
  checkBoxLabel,
  checkBoxBall,
  contentName,
  timerNumbers,
  timerTitles,
  iconInstagram,
  iconFacebook,
  iconLinkedin
} from "../utils/constants.js";
import { setZero } from "./clockSetter.js";

// THEME SWITCHER
export function switchTheme () {
  body.classList.toggle('body_theme_light');
  checkBoxLabel.classList.toggle('header__checkbox-label_checked');
  checkBoxBall.classList.toggle('header__checkbox-ball_checked');    
  contentName.classList.toggle('name_theme_light');
  timerNumbers.forEach(number => number.classList.toggle('timer__numbers_theme_light'));
  timerTitles.forEach(title => title.classList.toggle('timer__title_theme_light'));
  iconInstagram.classList.toggle('icon__instagram_theme_light');
  iconFacebook.classList.toggle('icon__facebook_theme_light');
  iconLinkedin.classList.toggle('icon__linkedin_theme_light');
}
// THEME SETTER
export function setTheme (currentHours, currentMinutes, sunriseTime, sunsetTime) {
  const currentTime = `${setZero(currentHours)}:${setZero(currentMinutes)}`
  if (currentTime >= sunriseTime && currentTime <= sunsetTime ) {
    switchTheme();
  }
}