import { Controller } from "./controller.js";
import { GameView } from "./game_view.js";
import { Player } from "./player.js";

export class Game {
    static FLOOR = 250;
    static PLAYER1_STARTX = -240;
    static PLAYER2_STARTX = 240;

    constructor(ctx) {
        // this.ctx = ctx;

        this.gameView = new GameView(ctx);

        this.player1 = new Player([Game.PLAYER1_STARTX, Game.FLOOR*0.75], "player1");
        this.controller1 = new Controller(this.player1, 1);
        this.player1.assignController(this.controller1);

        this.player2 = new Player([Game.PLAYER2_STARTX, Game.FLOOR*0.75], "player2");
        this.controller2 = new Controller(this.player2, 2);
        this.player2.assignController(this.controller2);

        this.objects = [this.player1, this.player2];
        this.runGame();
    }

    runGame() {
        this.gameView.draw(this.objects);
        this.handleCollisions();
        requestAnimationFrame(this.runGame.bind(this))
    }

    handleCollisions() {
        this.handleHit();
        this.handlePush();
    }

    handlePush(){
        for (let i = 0; i < this.objects.length; i++) {
            for (let j = i+1; j < this.objects.length; j++) {
                let obj1Boxes = this.objects[i].character.hurtboxes;
            }
        }
    }

    handleHit(){

    }
}
