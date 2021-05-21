export class Store {
  play: boolean;
  counter: number;
  life: number;
  score: number;
  timers: number;
  constructor() {
    this.play = false;
    this.counter = 0;
    this.life = 3;
    this.score = 0;
    this.timers = 60;
  }
}
