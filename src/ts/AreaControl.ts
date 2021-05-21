import { GlobalVars } from "./hitPosition";
import { map, Generate } from "./map";

export class AreaControl {
  SetArea() {
    map.forEach((el) => (el.className = "area"));
  }

  RandomBlock = () => {
    const position = map[Math.floor(Math.random() * 25)];
    GlobalVars.hitPosition = position?.id;
    position && position.classList.add("enemy");
    GlobalVars.disable = setTimeout(Generate, GlobalVars.speed);
  };
}
