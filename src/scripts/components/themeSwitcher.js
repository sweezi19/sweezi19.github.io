import {
  body,
  checkBoxLabel,
  checkBoxBall,
  contentName,
  timerNumbers,
  timerTitles,
  footer,
  footerLinks
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
  footer.classList.toggle('footer_theme_light');
  footerLinks.forEach(link => link.classList.toggle('footer__link_theme_light'))
}
// THEME SETTER
export function setTheme (currentHours, currentMinutes, sunriseTime, sunsetTime) {
  const currentTime = `${setZero(currentHours)}:${setZero(currentMinutes)}`
  if (currentTime >= sunriseTime && currentTime <= sunsetTime ) {
    switchTheme();
  }
}