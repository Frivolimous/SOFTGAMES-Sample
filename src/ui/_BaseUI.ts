import * as PIXI from 'pixi.js';

export class BaseUI extends PIXI.Container {

  constructor(protected bounds: PIXI.Rectangle) {
    super();

    let background = new PIXI.Graphics();

    background.beginFill(0xcccccc);
    background.drawShape(bounds);

    this.addChild(background);
  }
}
