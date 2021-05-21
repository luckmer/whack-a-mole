import buttonGenerator from "./ButtonGenerator";
import Clicker from "./Clicker";
import { map } from "./map";

const buttons = buttonGenerator.get();
const clicker = new Clicker();

buttons.forEach((i) => i.addEventListener("click", () => clicker.Click(i)));
map.forEach((el) => el.addEventListener("click", () => clicker.Target(el)));
