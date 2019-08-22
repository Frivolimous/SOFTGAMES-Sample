import * as PIXI from 'pixi.js';

const BUTTON_COLOR = 0x00cccc;
const BUTTON_RECT = new PIXI.Rectangle(0, 0, 100, 30);

export class JMButton extends PIXI.Container {
  protected _Disabled: boolean;

  private overlay: PIXI.Graphics;
  private downOnThis: boolean = false;
  private timeout: boolean = null;

  constructor(label: string, private output: () => void) {
    super();

    let background = new PIXI.Graphics();
    background.beginFill(BUTTON_COLOR);
    background.drawShape(BUTTON_RECT);

    let text = new PIXI.Text(label);
    text.x = (BUTTON_RECT.width - text.width) / 2;
    text.y = (BUTTON_RECT.height - text.height) / 2;
    this.addChild(background, text);

    this.interactive = true;
    this.buttonMode = true;

    // this.addListener('pointerover', (e: any) => {
    //   if (!this.disabled) {
    //     this.setDisplayState(DisplayState.DARKENED);
    //     if (this.onOver) {
    //       this.onOver();
    //     }
    //   }
    // });

    // this.addListener('pointerout', (e: any) => {
    //   if (!this.disabled) {
    //     this.setDisplayState(DisplayState.NORMAL);
    //     if (this.onOut) {
    //       this.onOut();
    //     }
    //   }
    //   this.downOnThis = false;
    // });

    this.addListener('pointerdown', () => {
      if (this.output) this.output();
    });

    // this.addListener('pointerdown', () => {
    //   if (!this.disabled) this.setDisplayState(DisplayState.BRIGHTENED);
    //   this.downOnThis = true;
    //   if (this.timeout === false) {
    //     this.timeout = true;

    //     window.setTimeout(() => this.timeout = false, 2);
    //   }
    // });
    // this.addListener('pointerup', () => {
    //   if (!this.disabled) this.setDisplayState(DisplayState.DARKENED);
    //   if (this.downOnThis && !this.disabled && this.output != null && this.timeout !== false) this.output();
    //   this.downOnThis = false;
    // });

  }

  // private setDisplayState = (_state: DisplayState) => {
  //   if (this.displayState === _state) return;
  //   this.displayState = _state;

  //   switch (_state) {
  //     case DisplayState.DARKENED:
  //       this.overlay.tint = 0;
  //       this.overlay.alpha = 0.5;
  //       this.addChild(this.overlay);
  //       break;
  //     case DisplayState.BLACKENED:
  //       this.overlay.tint = 0;
  //       this.overlay.alpha = 0.8;
  //       this.addChild(this.overlay);
  //       break;
  //     case DisplayState.GREYED:
  //       this.overlay.tint = 0x999999;
  //       this.overlay.alpha = 0.5;
  //       this.addChild(this.overlay);
  //       break;
  //     case DisplayState.BRIGHTENED:
  //       this.overlay.tint = 0xffffff;
  //       this.overlay.alpha = 0.3;
  //       this.addChild(this.overlay);
  //       break;
  //     case DisplayState.NORMAL:
  //     default:
  //       this.overlay.alpha = 0;
  //   }
  // }
}
