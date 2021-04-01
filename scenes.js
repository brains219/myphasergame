import Phaser from "phaser";
import bg0 from "./assets/bg0.png";
import bg1 from "./assets/bg1.png";
import bg2 from "./assets/bg2.png";
import bg3 from "./assets/bg3.png";
import bg4 from "./assets/bg4.png";
import player from "./assets/player.png";

export class TitleScene extends Phaser.Scene {
    constructor() {
        super()
    };

    preload() {
        //Pre-loading assets into queue
        this.load.image("bg0", bg0);
        this.load.image("bg1", bg1);
        this.load.image("bg2", bg2);
        this.load.image("bg3", bg3);
        this.load.image("bg4", bg4);
    }

    create() {
        //Assets being loaded into the scene
       const bg0 = this.add.image(400, 250, "bg0");
       const bg1 = this.add.image(400, 250, "bg1");
       const bg2 = this.add.image(400, 300, "bg2");
       const bg3 = this.add.image(400, 300, "bg3");
       const bg4 = this.add.image(400, 300, "bg4");
       const titleText = this.add.text(400, 250, "Fools Hell!!!");
       //Origin and scales being set for assets
       titleText.setOrigin(0.5,0.5);
        bg0.setScale(3, 3);
        bg1.setScale(2, 2);
        bg2.setScale(2, 2);
        bg3.setScale(2, 2);
        bg4.setScale(2, 2);

        
    }

    update() {
        
    }
};

export class GameScene extends Phaser.Scene {
    constructor() {
        super()
        
    }
    preload() {
        this.load.image("bg0", bg0);
        this.load.image("bg1", bg1);
        this.load.image("bg2", bg2);
        this.load.image("bg3", bg3);
        this.load.image("bg4", bg4);
        this.load.spritesheet("player", player, {
          frameWidth: 47,
          frameHeight: 50,
        });
    }
    
    create() {
      //References to game objects
      const bg0 = this.add.image(400, 250, "bg0");
      const bg1 = this.add.image(400, 250, "bg1");
      const bg2 = this.add.image(400, 300, "bg2");
      const bg3 = this.add.image(400, 300, "bg3");
      const bg4 = this.add.image(400, 300, "bg4");
      const player = this.add.sprite(100, 450, "player");
      //Scale of game objects
      bg0.setScale(3, 3);
      bg1.setScale(2, 2);
      bg2.setScale(2, 2);
      bg3.setScale(2, 2);
      bg4.setScale(2, 2);

      //Animation
      this.anims.create({
        key: "run",
        frames: this.anims.generateFrameNumbers("player", {
          frames: [21, 22, 23, 24, 25, 26, 27],
        }),
        frameRate: 10,
        repeat: -1,
      });

      //Some player controls
      this.controls = this.input.keyboard.createCursorKeys();

    //   if (this.controls.right.isDown) {
    //     player.body.setAccelerationX(100);
    //   }

    
    //Player misc
    player.play("run");
    player.setScale(2, 2);
    //Add physics to player
    // this.physics.add.sprite(100, 200, "player");
    
    //Moves player gameobject when clicking down
    this.input.on("pointerdown", function() {
        player.body.setVelocityX(10);
    })
    }

    update() {
        
    }

}

