import * as PIXI from 'pixi.js';
import { pixiApp } from '../../index';
import { JMTween } from '../../lib/JMTween';

const X_0 = 0;
const X_1 = 300;

const Y_F = 288;
const Y_DIFF = 2;

export class CardJump extends PIXI.Container {
  private static cardTexture: PIXI.Texture;

  private static genCardTexture() {
    let rect = new PIXI.Graphics();
    rect.beginFill(0xffffff);
    rect.lineStyle(1);
    rect.drawRoundedRect(0, 0, 30, 50, 3);
    CardJump.cardTexture = pixiApp.renderer.generateTexture(rect);
  }

  private cards: PIXI.Sprite[] = [];
  private cards2: PIXI.Sprite[] = [];
  private running = true;

  constructor() {
    super();

    if (!CardJump.cardTexture) {
      CardJump.genCardTexture();
    }

    for (let i = 0; i < 144; i++) {
      let card = new PIXI.Sprite(CardJump.cardTexture);
      card.position.set(X_0, Y_F - Y_DIFF * i);
      this.cards.push(card);
      this.addChild(card);
    }

    this.onTick();
  }

  public end() {
    this.running = false;
  }

  public getWidth() {
    return X_1 + 50;
  }

  public getHeight() {
    return Y_F;
  }

  private moveNextCard() {
    if (this.cards.length === 0) {
      this.running = false;
    } else {
      let card = this.cards.pop();
      let y = Y_F - Y_DIFF * this.cards2.length;
      this.cards2.push(card);
      this.addChild(card);
      new JMTween(card, 2000).to({x: X_1, y}).start();
    }
  }

  private onTick = () => {
    if (!this.running) return;

    this.moveNextCard();

    new JMTween(this, 1000).onComplete(this.onTick).start();
  }
}
