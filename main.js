import Phaser, { Physics } from "phaser"
import { TitleScene, GameScene } from "./scenes"

const GameConfig = {
  width: 800,
  height: 500,
  type: Phaser.AUTO,
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: 100,
      },
    },
  },
};

const game = new Phaser.Game(GameConfig);

game.scene.add("title", TitleScene);
game.scene.add("gamescene", GameScene);

game.scene.start("gamescene");