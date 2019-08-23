import * as PIXI from 'pixi.js';
import { BaseUI } from './_BaseUI';
import { JMButton } from './elements/JMButton';
import { CardJump } from '../components/cardJump/CardJump';
import { FPSCounter } from '../lib/FPSCounter';

export class CardDemo extends BaseUI {
  private counter: FPSCounter;
  private jump: CardJump;

  private title: PIXI.Text;
  private backB: JMButton;

  constructor(bounds: PIXI.Rectangle) {
    super(bounds);

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
  }

  public onResize = () => {
    this.drawBackground();
    this.title.x = (this.bounds.width - this.title.width) / 2;
    this.jump.x = (this.bounds.width - this.jump.getWidth()) / 2;
    this.jump.y = (this.bounds.height - this.jump.getHeight()) / 2;
    this.backB.position.set(20, this.bounds.height - 50);
  }

  private navOut = () => {
    this.counter.end();
    this.jump.end();

    this.destroy();
  }
}
