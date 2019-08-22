import * as PIXI from 'pixi.js';
import { BaseUI } from './_BaseUI';
import { JMButton } from './elements/JMButton';

export class InlineDemo extends BaseUI {
  constructor(bounds: PIXI.Rectangle) {
    super(bounds);

    let title = new PIXI.Text('Inline Demo');
    this.addChild(title);

    let backB = new JMButton('Back', () => this.destroy());
    backB.position.set(20, bounds.height - 50);
    this.addChild(backB);

    let image = PIXI.Sprite.from('./assets/transformer.png');
    this.addChild(image);
  }
}
