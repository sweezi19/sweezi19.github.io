import { currentHours, currentMinutes } from "../utils/constants.js"
import ApiLocation from "../components/ApiLocation.js"
import ApiSunriseSunset from "../components/ApiSunriseSunset"
import { setTheme } from "./themeSwitcher.js"
import { setZero } from "./clockSetter.js"

// // API
const apiLocation = new ApiLocation ({
  apiUrl: 'https://api.ipgeolocation.io'
})
const apiSunriseSunset = new ApiSunriseSunset ({
  apiUrl: 'https://api.sunrise-sunset.org'
})

// 12H TO 24H CONVERTER
function convertTime (timeStr) {
  const [time, modifier] = timeStr.split(' ');
  let [hours, minutes] = time.split(':');
  if (hours === '12') {
    hours = '00';
  }
  if (modifier === 'PM') {
    hours = parseInt(hours, 10) + 12;
  }

  return `${setZero(hours)}:${setZero(minutes)}`
}
// AUTO SUNSET & SUNRISE THEME SETTER
export function setUserLocationTheme() {
  return apiLocation.getUserLocation()
    .then(res => {
      return apiSunriseSunset.getSunriseSunsetData(res.latitude, res.longitude)
      .then(res => {
        const sunriseTime = convertTime(res.results.sunrise)
        const sunsetTime = convertTime(res.results.astronomical_twilight_end)
        setTheme(currentHours, currentMinutes, sunriseTime, sunsetTime)
      })
      .catch(error => console.error('Error:', error))
    })
    .catch(error => console.error('Error:', error))
}