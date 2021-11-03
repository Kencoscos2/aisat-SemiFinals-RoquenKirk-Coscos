import Phaser  from 'phaser';
import PlayScene from './scenes/PlayScene';
import MenuScene from './scenes/MenuScene';
import PreloadScene from './scenes/PreloadScene';
import ScoreScene from './scenes/ScoreScene';
import PauseScene from './scenes/PauseScene';

const WIDTH = 350;
const HEIGHT = 408;
const BIRD_POSITIOM = {x: WIDTH * 0.05, y: HEIGHT / 2};

const SHARED_CONFIG = {
width: WIDTH,
height: HEIGHT,
startPosition: BIRD_POSITIOM
}

const Scenes = [PreloadScene, MenuScene, ScoreScene, PlayScene, PauseScene];
const createScene = Scene => new Scene(SHARED_CONFIG)
const initScenes = () => Scenes.map(createScene)


const config = {
// WebGL (Web Graphics Library)
type: Phaser.AUTO,
...SHARED_CONFIG,
physics: {
  default: 'arcade',
  arcade: {
  }
},
scene: initScenes()
}
new Phaser.Game(config);
