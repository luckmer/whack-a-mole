import { AreaControl } from "./AreaControl";
import mapGenerator from "./MapGenerator";

export const map = mapGenerator.get();
export const areaControl = new AreaControl();
export const Generate = () => {
  areaControl.SetArea();
  areaControl.RandomBlock();
};
