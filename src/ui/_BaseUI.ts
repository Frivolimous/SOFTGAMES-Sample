import * as PIXI from 'pixi.js';

export class BaseUI extends PIXI.Container {

  protected background: PIXI.Graphics;

  constructor(protected bounds: PIXI.Rectangle, private bgColor = 0xcccccc) {
    super();

    this.interactive = true;
    this.background = new PIXI.Graphics();

    this.drawBackground();

    this.addChild(this.background);
  }

  public drawBackground = (bgColor?: number) => {
    this.bgColor = bgColor || this.bgColor;

    this.background.clear();
    this.background.beginFill(this.bgColor);
    this.background.drawShape(this.bounds);
  }

  public onResize = () => {

  }
}
