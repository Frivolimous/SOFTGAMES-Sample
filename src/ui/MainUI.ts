import * as PIXI from 'pixi.js';
import { BaseUI } from './_BaseUI';
import { JMButton } from './elements/JMButton';
import { CardDemo } from './CardDemo';
import { InlineDemo } from './InlineDemo';
import { FireDemo } from './FireDemo';

export class MainUI extends BaseUI {
  constructor(bounds: PIXI.Rectangle) {
    super(bounds);

    let title = new PIXI.Text('Main UI');
    this.addChild(title);

    let cardB = new JMButton('Cards', this.startCardDemo);
    let inlineB = new JMButton('Inline', this.startInlineDemo);
    let fireB = new JMButton('Fire', this.startFireDemo);

    cardB.position.set(50, 100);
    inlineB.position.set(50, 150);
    fireB.position.set(50, 200);
    this.addChild(cardB, inlineB, fireB);
  }

  private startCardDemo = () => {
    this.addChild(new CardDemo(this.bounds));
  }

  private startInlineDemo = () => {
    this.addChild(new InlineDemo(this.bounds));
  }

  private startFireDemo = () => {
    this.addChild(new FireDemo(this.bounds));
  }
}
