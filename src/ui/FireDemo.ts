import * as PIXI from 'pixi.js';
import { BaseUI } from './_BaseUI';
import { JMButton } from './elements/JMButton';
import { FireEffect } from '../lib/effects/FireEffect';

export class FireDemo extends BaseUI {

  private title: PIXI.Text;
  private backB: JMButton;

  private fireEffect: FireEffect;
  private logs: PIXI.Container;

  constructor(bounds: PIXI.Rectangle) {
    super(bounds, 0);

    this.title = new PIXI.Text('Fire Demo', {fill: 0xffff00});
    this.title.y = 50;
    this.addChild(this.title);

    this.backB = new JMButton('Back', this.navOut);
    this.addChild(this.backB);

    this.fireEffect = new FireEffect();
    this.addChild(this.fireEffect);

    this.logs = new PIXI.Container();
    this.addChild(this.logs);

    let log0 = new PIXI.Graphics();
    log0.beginFill(0x612E25);
    log0.drawRoundedRect(0, 0, 110, 15, 5);
    log0.rotation = - Math.PI / 9;
    log0.pivot.set(55, 10);
    log0.y = 5;

    let log1 = new PIXI.Graphics();
    log1.beginFill(0x70392F);
    log1.drawRoundedRect(0, 0, 110, 15, 5);
    log1.rotation = Math.PI / 9;
    log1.pivot.set(55, 10);
    log1.y = 5;

    this.logs.addChild(log0, log1);

    this.onResize();
  }

  public onResize = () => {
    this.drawBackground();
    this.title.x = (this.bounds.width - this.title.width) / 2;
    this.fireEffect.position.set(this.bounds.width / 2, this.bounds.height / 2);
    this.logs.position.set(this.bounds.width / 2, this.bounds.height / 2);
    this.backB.position.set(20, this.bounds.height - 50);
  }

  protected navOut = () => {
    this.fireEffect.end();
    this.destroy();
  }
}
