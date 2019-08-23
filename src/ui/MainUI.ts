import * as PIXI from 'pixi.js';
import { BaseUI } from './_BaseUI';
import { JMButton } from './elements/JMButton';
import { CardDemo } from './CardDemo';
import { InlineDemo } from './InlineDemo';
import { FireDemo } from './FireDemo';

export class MainUI extends BaseUI {
  private title: PIXI.Text;
  private buttonContainer = new PIXI.Container();

  private currentScreen: BaseUI;

  constructor(bounds: PIXI.Rectangle) {
    super(bounds);

    this.title = new PIXI.Text('Main UI');
    this.title.y = 50;
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
    this.title.x = (this.bounds.width - this.title.width) / 2;
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
