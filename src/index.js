import Phaser from "phaser";
import GameScene from "./scenes/game";
import "./index.css";

const config = {
  type: Phaser.AUTO,
  backgroundColor: 0x1b1b29,
  dom: {
    createContainer: true,
  },
  scale: {
    mode: Phaser.Scale.RESIZE,
    parent: "game-container",
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: 0,
      },
    },
  },
  render: {
    pixelArt: true,
  },
  scene: [GameScene],
};

const game = new Phaser.Game(config);
