// IMPORTS
import "../pages/index.css"
import { switchTheme } from "../scripts/components/themeSwitcher.js"
import { setUserLocationTheme } from "../scripts/components/userLocationThemeSetter.js"
import { setClock } from "../scripts/components/clockSetter.js"
import { deathDate, checkBox, checkBoxBall } from "../scripts/utils/constants.js"

// FUNCTIONS
setClock(deathDate);
setUserLocationTheme()

// // EVENT LISTENERS
checkBox.addEventListener('change', switchTheme);
checkBoxBall.addEventListener('click', switchTheme);