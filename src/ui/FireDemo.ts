import * as PIXI from 'pixi.js';
import { BaseUI } from './_BaseUI';
import { JMButton } from './elements/JMButton';
import { FireEffect } from '../lib/effects/FireEffect';

export class FireDemo extends BaseUI {

  private fireEffect: FireEffect;

  constructor(bounds: PIXI.Rectangle) {
    super(bounds, 0);

    let title = new PIXI.Text('Fire Demo');
    this.addChild(title);

    let backB = new JMButton('Back', this.navOut);
    backB.position.set(20, bounds.height - 50);
    this.addChild(backB);

    this.fireEffect = new FireEffect();
    this.fireEffect.position.set(400, 400);
    this.addChild(this.fireEffect);
  }

  protected navOut = () => {
    this.fireEffect.end();
    this.destroy();
  }
}
