import { Life, Time, Points } from "./import";
import { areaControl, Generate } from "./map";
import { GlobalVars } from "./hitPosition";
import { Store } from "./Store";

class Clicker extends Store {
  private GameEnd() {
    areaControl.SetArea();
    clearInterval(GlobalVars.PlayTimer);
    clearTimeout(GlobalVars.disable);
    this.play = false;
    this.counter = 0;
    this.life = 3;
    this.score = 0;
    this.timers = 60;
  }

  private Timer() {
    let time = this.timers;
    time--;
    this.timers = time;
    if (this.timers <= 0) this.GameEnd();
    Time ? (Time.innerHTML = `time :${time}`) : "";
  }

  private Area(e: HTMLDivElement) {
    if (e.classList.value !== "area enemy") {
      this.life -= 1;
      if (this.life <= 0) this.GameEnd();
      if (this.life >= 0) Life ? (Life.innerHTML = `life: ${this.life}`) : "";
    }
  }

  private Enemy(e: HTMLDivElement) {
    if (!e.classList.contains("enemy")) return;
    if (e.id === GlobalVars.hitPosition && e.classList.contains("enemy")) {
      e.className = "area";
    }
    this.score += 1;
    Points ? (Points.innerHTML = `Score :${this.score}`) : "";
    GlobalVars.hitPosition = null;
  }

  public Click(e: HTMLDivElement) {
    const target = e.classList.value.replace(/button/, "").trim();

    console.log(this.play, this.counter);
    if (target === "play") {
      this.counter += 1;
      this.play = true;

      if (this.play && this.counter <= 1) {
        Generate();
        GlobalVars.PlayTimer = setInterval(() => this.Timer(), 1000);
      }
    }

    if (target === "restart") window.location.reload();
  }

  public Target(e: HTMLDivElement) {
    const startClick = this.play;
    if (startClick) {
      this.Area(e);
      this.Enemy(e);
    }
  }
}

export default Clicker;
