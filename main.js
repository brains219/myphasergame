import Phaser, { Physics } from "phaser"
import { TitleScene } from "./scenes"

const GameConfig = {
  width: 800,
  height: 500,
  type: Phaser.AUTO,
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: 0,
      },
    },
  },
};

const game = new Phaser.Game(GameConfig);

game.scene.add("title", TitleScene);

game.scene.start("title");