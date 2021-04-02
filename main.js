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
        y: 300,
      },
    },
  },
};

const game = new Phaser.Game(GameConfig);

let scenePlaying = "title";

export function handleSceneChange() {
  if (scenePlaying === "title") {
    scenePlaying = "gamescene";
  } else {
    scenePlaying = "title";
  }
}

game.scene.add("title", TitleScene);
game.scene.add("gamescene", GameScene);

game.scene.start("gamescene");