import { SpriteSheet } from "./sprite_sheet";

export class Samurai extends SpriteSheet {

    // Specific constants for Samurai Sprite Sheet
    static imgSrc = "assets/images/Sprite Sheets/Samurai/Run.png"; // needs changing
    static frameWidth = 128;
    static frameHeight = 128;

    // Class Methods:
    constructor(player) {
        super(player, Samurai.imgSrc, Samurai.frameWidth, Samurai.frameHeight);
        this.draw = this.draw.bind(this);
    }

    draw(ctx, pos, scale) {
        ctx.drawImage(this.img,
            this.framePosX,this.framePosY,
            this.frameWidth, this.frameHeight,
            pos[0], pos[1],
            this.frameWidth*scale, this.frameHeight*scale)

        requestAnimationFrame(this.idleAnimation.bind(this))
    }

    idleAnimation() {
        this.framePosX = (this.framePosX + this.frameWidth) % (this.img.width);
    }

}
