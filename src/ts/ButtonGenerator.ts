import { Buttons } from "./import";

function PlayButton(name: string) {
  const Div = document.createElement("div");
  Div.classList.add("button", name);
  Div.innerHTML = name;
  Buttons?.appendChild(Div);
  return Div;
}

class ButtonGenerator {
  buttons: HTMLDivElement[];

  constructor() {
    this.buttons = [];
  }

  create(name: string, type: string) {
    const buttons = this.buttons;
    switch (type) {
      case "1":
        const button = PlayButton(name);
        buttons.push(button);
    }
  }
  get() {
    return this.buttons;
  }
}

const buttonGenerator = new ButtonGenerator();

buttonGenerator.create("play", "1");
buttonGenerator.create("restart", "1");

export default buttonGenerator;
