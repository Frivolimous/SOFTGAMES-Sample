import * as _ from 'lodash';
import * as PIXI from 'pixi.js';
import { MainUI } from './ui/MainUI';

export let pixiApp: PIXI.Application;

let bounds: PIXI.Rectangle;
let pixiCanvas = document.getElementById('pixi-canvas');
let menu: MainUI;

let init = () => {
  bounds = new PIXI.Rectangle(0, 0, pixiCanvas.offsetWidth, pixiCanvas.offsetHeight);
  pixiApp = new PIXI.Application({
    backgroundColor: 0x00ff00,
    antialias: true,
    resolution: 1,
    transparent: true,
    width: bounds.width,
    height: bounds.height,
  });

  pixiCanvas.append(pixiApp.view);

  menu = new MainUI(bounds);
  pixiApp.stage.addChild(menu);
};

window.addEventListener('resize', e => {
  finishResize();
});

let finishResize = _.debounce(() => {
  bounds.width = pixiCanvas.offsetWidth;
  bounds.height = pixiCanvas.offsetHeight;
  pixiApp.renderer.resize(pixiCanvas.offsetWidth, pixiCanvas.offsetHeight);
  menu.onResize();
}, 300);

requestAnimationFrame(init);
