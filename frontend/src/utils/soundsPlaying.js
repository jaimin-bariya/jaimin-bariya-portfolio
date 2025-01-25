/** @format */

import mouseClick from "../assets/sounds/mouseClick.wav";
import modeChange from "../assets/sounds/modeChange.wav";
import navChange from "../assets/sounds/navChange.wav";
import adminIntro from "../assets/sounds/admin.wav";

const playMouseClick = () => {
  const sound = new Audio(mouseClick);
  sound.play();
};

const themeModeChange = () => {
  const sound = new Audio(modeChange);
  sound.play();
};

const PlaynavChangeSound = () => {
  const sound = new Audio(navChange);
  sound.play();
};

const PlayAdminIntro = () => {
  const sound = new Audio(adminIntro);
  sound.play();
};

export { playMouseClick, themeModeChange, PlaynavChangeSound, PlayAdminIntro };
