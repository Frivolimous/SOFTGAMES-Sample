import * as PIXI from 'pixi.js';
import { BaseUI } from './_BaseUI';
import { JMButton } from './elements/JMButton';

export class FireDemo extends BaseUI {
  constructor(bounds: PIXI.Rectangle) {
    super(bounds);

    let title = new PIXI.Text('Fire Demo');
    this.addChild(title);

    let backB = new JMButton('Back', () => this.destroy());
    backB.position.set(20, bounds.height - 50);
    this.addChild(backB);
  }
}
