import * as PIXI from 'pixi.js';

const IMG_SRCS: IImgAsset[] = [
  { src: './assets/bunny.png', width: 128, height: 128},
  { src: './assets/money.png', width: 128, height: 128},
  { src: './assets/rupee.png', width: 128, height: 128},
  { src: './assets/skull.png', width: 128, height: 128},
  { src: './assets/smile.png', width: 128, height: 128},
  { src: './assets/transformer.png', width: 128, height: 128},
];

interface IImgAsset {
  src: string;
  width: number;
  height: number;
}

export class InlineImgText extends PIXI.Container {
  constructor(public text: string, public style: PIXI.TextStyleOptions) {
    super();

    // let field = new PIXI.Text(text, style);
    // this.addChild(field);

    let arr = this.splitAt(text);

    let cX = 0;

    let fontSize: number = style ? (style.fontSize as number) || 15 : 15;

    for (let el of arr) {
      if (el.charAt(0) === '@') {
        let asset = IMG_SRCS[Number(el.charAt(1))]
        let sprite = PIXI.Sprite.from(asset.src);
        sprite.scale.set(fontSize / asset.height);
        // sprite.height = fontSize;
        // sprite.scale.y = sprite.scale.x;
        sprite.x = cX;
        cX += asset.width * fontSize / asset.height;
        this.addChild(sprite);
      } else {
        let field = new PIXI.Text(el, style);
        field.x = cX;
        cX += field.width;
        this.addChild(field);
      }
    }
  }

  private splitAt(text: string): string[] {
    let m: string[] = [];
    for (let i = 0; i < text.length; i++) {
      let char = text.charAt(i);
      if (char === '@') {
        m.push(text.substring(0, i));
        m.push(text.substr(i, 2));
        text = text.substr(i + 2);
        i = 0;
      }
    }

    if (text.length > 0) {
      m.push(text);
    }

    return m;
  }
}
