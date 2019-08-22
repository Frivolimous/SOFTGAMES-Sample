import * as PIXI from 'pixi.js';
import { BaseUI } from './_BaseUI';
import { JMButton } from './elements/JMButton';

export class CardDemo extends BaseUI {
  constructor(bounds: PIXI.Rectangle) {
    super(bounds);

    let title = new PIXI.Text('Card Demo');
    this.addChild(title);

    let backB = new JMButton('Back', () => this.destroy());
    backB.position.set(20, bounds.height - 50);
    this.addChild(backB);
  }
}
