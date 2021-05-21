import { Game } from "./import";

const panels: number = 25;

class MapGenerator {
  panels: HTMLDivElement[];
  constructor() {
    this.panels = [];
  }

  set(blocks: number) {
    const panel = this.panels;

    for (let i = 0; i < blocks; i++) {
      const Div = document.createElement("div");
      Div.classList.add("area");
      Div.id = i.toString();
      panel.push(Div);
      Game?.appendChild(Div);
    }
  }

  get() {
    return this.panels;
  }
}

const mapGenerator = new MapGenerator();
mapGenerator.set(panels);
export default mapGenerator;
