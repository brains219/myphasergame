import Phaser from "phaser"

export class TitleScene extends Phaser.Scene {
    preload() {
        
    }

    create() {
       const titleText = this.add.text(400, 250, "Hello World!");
       titleText.setOrigin(0.5,0.5);
    }
};

export class GameScene extends Phaser.Scene {
    preload() {

    }

    create() {

    }
}