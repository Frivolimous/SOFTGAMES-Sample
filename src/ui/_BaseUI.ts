import * as PIXI from 'pixi.js';

export class BaseUI extends PIXI.Container {

  constructor(protected bounds: PIXI.Rectangle, bgColor = 0xcccccc) {
    super();

    let background = new PIXI.Graphics();

    background.beginFill(bgColor);
    background.drawShape(bounds);

    this.addChild(background);
  }
}
