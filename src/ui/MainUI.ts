import * as PIXI from 'pixi.js';
import { BaseUI } from './_BaseUI';
import { JMButton } from './elements/JMButton';
import { CardDemo } from './CardDemo';
import { InlineDemo } from './InlineDemo';
import { FireDemo } from './FireDemo';
import { JMTween } from '../lib/JMTween';

export class MainUI extends BaseUI {
  private title: PIXI.Text;
  private buttonContainer = new PIXI.Container();

  private currentScreen: BaseUI;

  constructor(bounds: PIXI.Rectangle) {
    super(bounds, 0xcc9933);

    this.title = new PIXI.Text('Super Cool Demo!', {fontWeight: 'bold'});
    this.title.anchor.set(0.5);
    this.title.y = 50;

    new JMTween(this.title, 500).from({rotation: -Math.PI * 10, y: bounds.height}).start();
    this.addChild(this.title);

    let cardB = new JMButton('Cards', this.startCardDemo);
    let inlineB = new JMButton('Inline', this.startInlineDemo);
    let fireB = new JMButton('Fire', this.startFireDemo);

    inlineB.position.set(0, 50);
    fireB.position.set(0, 100);
    this.addChild(this.buttonContainer);
    this.buttonContainer.addChild(cardB, inlineB, fireB);

    this.onResize();
  }

  public onResize = () => {
    this.drawBackground();
    this.title.x = (this.bounds.width) / 2;
    this.buttonContainer.position.set((this.bounds.width - 100) / 2, (this.bounds.height - 200) / 2);

    if (this.currentScreen) this.currentScreen.onResize();
  }

  private startCardDemo = () => {
    if (this.currentScreen) this.currentScreen.destroy();
    this.currentScreen = new CardDemo(this.bounds);
    this.addChild(this.currentScreen);
  }

  private startInlineDemo = () => {
    if (this.currentScreen) this.currentScreen.destroy();
    this.currentScreen = new InlineDemo(this.bounds);
    this.addChild(this.currentScreen);
  }

  private startFireDemo = () => {
    if (this.currentScreen) this.currentScreen.destroy();
    this.currentScreen = new FireDemo(this.bounds);
    this.addChild(this.currentScreen);
  }
}
