import * as PIXI from 'pixi.js';

export class FPSCounter extends PIXI.Text {
  private running = true;
  private prevTime: number;

  constructor(style: PIXI.TextStyleOptions = {}) {
    super('0', style);
    this.prevTime = new Date().getTime();
    this.onTick();
  }

  public end = () => {
    this.running = false;
  }

  private onTick = () => {
    if (!this.running) return;

    let time = new Date().getTime();
    let diff = time - this.prevTime;
    this.prevTime = time;
    this.text = Math.round(1000 / diff).toString();

    requestAnimationFrame(this.onTick);
  }
}
