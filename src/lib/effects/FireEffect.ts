import * as PIXI from 'pixi.js';
import { pixiApp } from '../../index';
import { JMTween } from '../JMTween';

// Inspired by: https://dribbble.com/shots/2651843-Fire-loader

const COLOR_END = 0xff0000;
const COLOR_START = 0xffff00;

export class FireEffect extends PIXI.Container {
  private static diamondTexture: PIXI.Texture;

  private static genDiamondTexture() {
    let rect = new PIXI.Graphics();
    rect.beginFill(0xffffff);
    rect.drawRoundedRect(0, 0, 70, 70, 5);
    rect.rotation = Math.PI / 4;
    let diamond = new PIXI.Container();
    diamond.addChild(rect);
    FireEffect.diamondTexture = pixiApp.renderer.generateTexture(diamond);
  }

  private running = true;

  constructor() {
    super();

    if (!FireEffect.diamondTexture) {
      FireEffect.genDiamondTexture();
    }

    this.onTick();
  }

  public end() {
    this.running = false;
  }

  private makeParticle() {
    let particle = new PIXI.Sprite(FireEffect.diamondTexture);
    particle.tint = COLOR_START;
    this.addChild(particle);
    particle.anchor.set(0.5, 1);
    particle.x = (Math.random() - 0.5) * 20;
    this.addChild(particle);
    particle.scale.set(0, 0);

    new JMTween(particle, 2000).colorTo({tint: COLOR_END}).start()
    .onComplete(() => {
      particle.destroy();
    });

    new JMTween(particle, 800).to({y: -150, x: (Math.random() - 0.5) * 20}).wait(1000).start();

    new JMTween(particle.scale, 1000).to({x: 1, y: 1}).start()
    .chain(particle.scale, 800).to({x: 0.001, y: 0.001});

    // let tween2 = new JMTween(particle, 2000).colorTo({tint: 0xff0000});
    // let tween = new JMTween(particle, 2000).colorTo({tint: 0xffff00}).start().chainTween(tween2);
    // tween2.chain(tween);
  }

  private onTick = () => {
    if (!this.running) return;

    this.makeParticle();

    new JMTween(this, 500).onComplete(this.onTick).start();
  }
}
