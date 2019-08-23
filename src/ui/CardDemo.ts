import * as PIXI from 'pixi.js';
import { BaseUI } from './_BaseUI';
import { JMButton } from './elements/JMButton';
import { CardJump } from '../components/cardJump/CardJump';
import { FPSCounter } from '../lib/FPSCounter';
import { JMTween, JMEasing } from '../lib/JMTween';

export class CardDemo extends BaseUI {
  private counter: FPSCounter;
  private jump: CardJump;

  private title: PIXI.Text;
  private backB: JMButton;

  constructor(bounds: PIXI.Rectangle) {
    super(bounds, 0x33ccaa);

    this.title = new PIXI.Text('Card Demo');
    this.title.y = 50;
    this.addChild(this.title);

    this.backB = new JMButton('Back', this.navOut);
    this.addChild(this.backB);

    this.jump = new CardJump();

    this.addChild(this.jump);

    this.counter = new FPSCounter();
    this.addChild(this.counter);

    this.onResize();
    new JMTween(this).from({x: bounds.width / 2, y: bounds.height / 2, width: 1, height: 1}).easing(JMEasing.Back.Out).start();
  }

  public onResize = () => {
    this.drawBackground();
    this.title.x = (this.bounds.width - this.title.width) / 2;
    this.jump.x = (this.bounds.width - this.jump.getWidth()) / 2;
    this.jump.y = (this.bounds.height - this.jump.getHeight()) / 2;
    this.backB.position.set(20, this.bounds.height - 50);
  }

  private navOut = () => {
    new JMTween(this, 500).to({x: this.bounds.width / 2, y: this.bounds.height / 2, width: 1, height: 1}).start().easing(JMEasing.Back.In).onComplete(() => {
      this.counter.end();
      this.jump.end();

      this.destroy();
    });
  }
}
