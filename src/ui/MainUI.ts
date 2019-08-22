import * as PIXI from 'pixi.js';

export class MainUI extends PIXI.Container {
  
  constructor(private bounds: PIXI.Rectangle) {
    super();
    var bg;
    
    let background = new PIXI.Graphics();

    background.beginFill(0xcccccc);
    background.drawShape(bounds);

    this.addChild(background);
  }

  startCardDemo = () => {

  }
}
