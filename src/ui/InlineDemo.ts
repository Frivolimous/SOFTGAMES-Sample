import * as PIXI from 'pixi.js';
import { BaseUI } from './_BaseUI';
import { JMButton } from './elements/JMButton';
import { RandomTriImgText } from '../components/inlineImgText/RandomTriImgText';
import { JMTween, JMEasing } from '../lib/JMTween';

export class InlineDemo extends BaseUI {
  private demo: RandomTriImgText;

  private title: PIXI.Text;
  private backB: JMButton;

  constructor(bounds: PIXI.Rectangle) {
    super(bounds);

    this.title = new PIXI.Text('Inline Demo');
    this.title.y = 50;
    this.addChild(this.title);

    this.backB = new JMButton('Back', this.navOut);
    this.addChild(this.backB);

    this.demo = new RandomTriImgText();
    this.demo.x = 100;
    this.addChild(this.demo);

    this.onResize();
    new JMTween(this, 500).from({y: bounds.height}).easing(JMEasing.Quintic.Out).start();
  }

  public onResize = () => {
    this.drawBackground();
    this.title.x = (this.bounds.width - this.title.width) / 2;
    this.demo.y = this.bounds.height / 2 - 50;
    this.backB.position.set(20, this.bounds.height - 50);
  }

  protected navOut = () => {
    new JMTween(this, 500).to({y: this.bounds.height}).start().easing(JMEasing.Quintic.In).onComplete(() => {
      this.demo.end();
      this.destroy();
    });
  }
}
