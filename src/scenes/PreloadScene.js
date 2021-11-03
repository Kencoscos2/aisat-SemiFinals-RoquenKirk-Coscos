import Phaser from 'phaser';



class PreloadScene extends Phaser.Scene{

    constructor(){
        super('PreloadScene');
    }

    preload(){
        this.load.image('menubg', 'assets/menu.gif');
        this.load.image('dash', 'assets/Dash.png');
        this.load.image('sky','assets/flappybirdbg.png');
        this.load.spritesheet('bird','assets/Bat.png', {
            frameWidth: 48, frameHeight: 38
        });
        this.load.image('pipe', 'assets/pipe.png');
        this.load.image('pause', 'assets/pause.png');
        this.load.image('back', 'assets/back.png');
        

    }

    create(){
        this.scene.start('MenuScene');
    }


    update(){



    }


}
export default PreloadScene;