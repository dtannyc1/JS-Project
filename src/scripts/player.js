import { Commander } from "./Characters/commander.js";
import { Samurai } from "./Characters/samurai.js";
import { Moveable } from "./moveable.js";

export class Player extends Moveable{
    constructor(startpos, name) {
        let options = {startpos: startpos};
        super(options);

        this.name = name;
        if (name === "player1") {
            this.xFacing = 1;
            this.character = new Samurai(this); // change later when introduce other sprites?

        } else {
            this.xFacing = -1;
            this.character = new Commander(this); // change later when introduce other sprites?

        }
        this.moveSpeed = 10;
        this.scale = 3.15;

        this.health = 100;

        this.currentAction = "idle";
        this.renderBoxes = false;

        console.log(`${name} created successfully`)
    }

    draw(ctx){
        this.move();
        this.character.currentAction(this.currentAction);
        this.character.draw(ctx, this.pos, this.scale);
    }

    assignController(controller) {
        this.controller = controller;
    }

    getHurtBoxes(main_scale) {
        if (this.character.hurtboxes) {
            return this.calculateBoxes(main_scale, this.character.hurtboxes)
        } else {
            return [];
        }
    }

    getHitBoxes(main_scale) {
        if (this.character.hitboxes) {
            return this.calculateBoxes(main_scale, this.character.hitboxes)
        } else {
            return [];
        }
    }

    calculateBoxes(main_scale, boxes){
        let objBoxes = boxes;
        let pos = this.pos;
        let xFacing = this.xFacing;
        let scale = this.scale;
        let frameWidth = this.character.frameWidth;

        let outputBoxes = [];
        for (let k = 0; k < objBoxes.length; k++){
            let box = objBoxes[k].slice();

            if (xFacing === 1) {
                box[0] = pos[0] - frameWidth*scale/2 + box[0]*scale;
            } else {
                box[0] = pos[0] + frameWidth*scale/2 - box[0]*scale - box[2]*scale;
            }
            box[1] = pos[1] + box[1]*scale;
            box[2] *= scale;
            box[3] *= scale;

            box[0] *= main_scale;
            box[1] *= main_scale;
            box[2] *= main_scale;
            box[3] *= main_scale;

            outputBoxes.push(box);
        }
        return outputBoxes;
    }

    toggleRenderBoxes() {
        this.renderBoxes = !this.renderBoxes;
    }
}
