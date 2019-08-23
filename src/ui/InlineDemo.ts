import * as PIXI from 'pixi.js';
import { BaseUI } from './_BaseUI';
import { JMButton } from './elements/JMButton';
import { RandomTriImgText } from '../components/inlineImgText/RandomTriImgText';

export class InlineDemo extends BaseUI {
  private demo: RandomTriImgText;

  constructor(bounds: PIXI.Rectangle) {
    super(bounds);

    let title = new PIXI.Text('Inline Demo');
    this.addChild(title);

    let backB = new JMButton('Back', this.navOut);
    backB.position.set(20, bounds.height - 50);
    this.addChild(backB);

    this.demo = new RandomTriImgText();
    this.demo.position.set(100, 100);
    this.addChild(this.demo);
  }

  protected navOut = () => {
    this.demo.end();
    this.destroy();
  }
}
