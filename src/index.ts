import * as _ from 'lodash';
import * as PIXI from 'pixi.js';
import { MainUI } from './ui/MainUI';
import { FireDemo } from './ui/FireDemo';

export let pixiApp: PIXI.Application;

let pixiCanvas = document.createElement('div');
document.body.appendChild(pixiCanvas);

let init = () => {
  let bounds = new PIXI.Rectangle(0, 0, 800, 600);

  pixiApp = new PIXI.Application({
    backgroundColor: 0x00ff00,
    antialias: true,
    resolution: 1,
    roundPixels: true,
    transparent: true,
    width: bounds.width,
    height: bounds.height,
  });

  document.body.append(pixiApp.view);

  let menu = new MainUI(bounds);
  pixiApp.stage.addChild(menu);
};

requestAnimationFrame(init);
