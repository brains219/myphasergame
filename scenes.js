import Phaser from "phaser";
import bg0 from "./assets/bg0.png";
import bg1 from "./assets/bg1.png";
import bg2 from "./assets/bg2.png";
import bg3 from "./assets/bg3.png";
import bg4 from "./assets/bg4.png";
import player1 from "./assets/player.png";
import banana1 from "./assets/banana.png";
import button1 from "./assets/button.png";
import {handleSceneChange} from "./main";

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
        this.load.spritesheet("player", player1, {
          frameWidth: 50,
          frameHeight: 37,
        });
        this.load.image("banana", banana1);
        
    }
    
    create() {
      //References to game objects
      const bg0 = this.add.image(400, 250, "bg0");
      const bg1 = this.add.image(400, 250, "bg1");
      const bg2 = this.add.image(400, 300, "bg2");
      const bg3 = this.add.image(400, 300, "bg3");
      const bg4 = this.add.image(400, 300, "bg4");
      this.player = this.physics.add.sprite(100, 350, "player");
      this.banana = this.physics.add.image(300, 200, "banana");
      this.score = 0;
      this.scoreText = this.add.text(700, 20, `Score: ${this.score}`);
      // this.platform = this.add.rectangle(400, 500, 800, 78, 0x9b7653);
      //Scale of game objects
      bg0.setScale(3, 3);
      bg1.setScale(2, 2);
      bg2.setScale(2, 2);
      bg3.setScale(2, 2);
      bg4.setScale(2, 2);
      this.banana.setScale(0.1, 0.1);
      this.player.setScale(2, 2);

      //Animations
      this.anims.create({
        key: "right",
        frames: this.anims.generateFrameNumbers("player", {
          frames: [8, 9, 10, 11, 12, 13],
        }),
        frameRate: 8,
        repeat: -1,
      });

      this.anims.create({
        key: "left",
        frames: this.anims.generateFrameNumbers("player", {
          frames: [8, 9, 10, 11, 12, 13],
        }),
        frameRate: 8,
        repeat: -1,
      });

      this.anims.create({
        key: "idle",
        frames: this.anims.generateFrameNumbers("player", {
          frames: [0, 1, 2, 3]
        }),
        frameRate: 8,
        repeat: -1,
      })

      this.anims.create({
        key: "jump",
        frames: this.anims.generateFrameNumbers("player", {
          frames: [16, 17, 18]
        }),
        frameRate: 4,
        repeat: 1,
      })

      this.anims.create({
        key: "spinning",
        frames: this.anims.generateFrameNumbers("banana", {
          frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        }),
        frameRate: 8,
        repeat: -1,
      });

      //Raining stars
      // this.physics.add.group({
      //   key: "banana",
      //   repeat: 30, 
      //   setXY: { x: 12, y: 0, stepX: 70 }
      // });
    
      //Some player controls
      this.controls = this.input.keyboard.createCursorKeys();
    
      //Colliders
      this.physics.add.collider(this.player, this.banana);
      this.banana.setCollideWorldBounds(true);
      this.player.setCollideWorldBounds(true);
    }

    update() {

      if ((this.player.y === 0) && (this.player.x === 0)) {
        this.player.anims.play("idle");
      } else if (this.controls.left.isDown) {

        this.player.setFlipX(true);

        this.player.setVelocityX(-160);

        this.player.anims.play("left", true);
      } else if (this.controls.right.isDown) {
        this.player.setFlipX(false);

        this.player.setVelocityX(160);

        this.player.anims.play("right", true);
      } else if (this.controls.up.isDown) {
        this.player.setVelocityY(-100);
        
        this.player.anims.play("jump", true);
      } else {
        this.player.setVelocityX(0);
        this.player.anims.play("idle");
      }
    }

}

