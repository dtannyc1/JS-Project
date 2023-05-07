import { Samurai } from "./Characters/samurai.js";
import { Moveable } from "./moveable.js";

export class Player extends Moveable{
    constructor(startpos, name) {
        let options = {startpos: startpos};
        super(options);

        this.name = name;
        if (name === "player1") {
            this.xFacing = 1;
        } else {
            this.xFacing = -1;
        }
        this.moveSpeed = 10;
        this.scale = 3.15;

        this.health = Math.random()*100;

        this.character = new Samurai(this); // change later when introduce other sprites?
        this.currentAction = "idle";

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
}
