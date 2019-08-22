import * as _ from 'lodash';
import * as PIXI from 'pixi.js';
import { MainUI } from './ui/mainUI';

function component() {
    const element = document.createElement('div');

    return element;
}
let pixiCanvas = component();
document.body.appendChild(pixiCanvas);

let init = () => {

  let bounds = new PIXI.Rectangle(0, 0, 800, 600);

  let app = new PIXI.Application({
    backgroundColor: 0x00ff00,
    antialias: true,
    resolution: 1,
    roundPixels: true,
    transparent: true,
    width: bounds.width,
    height: bounds.height,
  });

  document.body.append(app.view);

  // let shape = new PIXI.Graphics();
  // shape.beginFill(0x00ffff);
  // shape.drawRect(0, 0, 100, 100);
  // app.stage.addChild(shape);

  // console.log(PIXI.Graphics);

  let menu = new MainUI(bounds);
  app.stage.addChild(menu);
};

requestAnimationFrame(init);
