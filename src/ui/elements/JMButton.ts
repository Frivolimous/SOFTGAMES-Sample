import * as PIXI from 'pixi.js';
import { JMTween, JMEasing } from '../../lib/JMTween';

const BUTTON_COLOR = 0x00aadd;
const BUTTON_RECT = new PIXI.Rectangle(0, 0, 100, 30);

export class JMButton extends PIXI.Container {
  protected _Disabled: boolean;

  private background: PIXI.Graphics;

  constructor(label: string, private output: () => void) {
    super();

    this.background = new PIXI.Graphics();
    this.background.beginFill(0xffffff);
    this.background.tint = BUTTON_COLOR;
    this.background.drawShape(BUTTON_RECT);

    let text = new PIXI.Text(label);
    text.x = (BUTTON_RECT.width - text.width) / 2;
    text.y = (BUTTON_RECT.height - text.height) / 2;
    this.addChild(this.background, text);

    this.interactive = true;
    this.buttonMode = true;

    this.addListener('pointerdown', () => {
      let tint = this.background.tint;
      new JMTween(this.background, 100).colorTo({tint: 0xffffff}).start().onComplete(() => { if (this.output) this.output(); }).chain(this.background, 300).colorTo({tint});
    });
  }
}
