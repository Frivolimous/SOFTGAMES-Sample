import * as PIXI from 'pixi.js';
import { BaseUI } from './_BaseUI';
import { JMButton } from './elements/JMButton';
import { CardJump } from '../components/cardJump/CardJump';
import { FPSCounter } from '../lib/FPSCounter';

export class CardDemo extends BaseUI {
  private counter: FPSCounter;
  private jump: CardJump;

  constructor(bounds: PIXI.Rectangle) {
    super(bounds);

    let title = new PIXI.Text('Card Demo');
    title.x = 100;
    this.addChild(title);

    let backB = new JMButton('Back', this.navOut);
    backB.position.set(20, bounds.height - 50);
    this.addChild(backB);

    this.jump = new CardJump();

    this.jump.position.set(100, 100);
    this.addChild(this.jump);

    this.counter = new FPSCounter();
    this.addChild(this.counter);
  }

  private navOut = () => {
    this.counter.end();
    this.jump.end();

    this.destroy();
  }
}
