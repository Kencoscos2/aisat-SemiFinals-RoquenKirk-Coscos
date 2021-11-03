
import BaseScene from './BaseScene';



class MenuScene extends BaseScene{

    constructor(config){
        super('MenuScene', config);

        this.menu = [
            {scene: 'PlayScene', text: 'Play'},
            {scene: 'ScoreScene', text: 'Score'},
            {scene: null, text: 'Exit the Game'},


        ]
    }

    create(){
        super.create();
        
        this.createMenu(this.menu, (menuItem) => this.setupMenuEvents(menuItem));
    }

    setupMenuEvents(menuItem){
        const textGO = menuItem.textGO;
        textGO.setInteractive();

        textGO.on('pointerover', () =>{
            textGO.setStyle({fill: `#ffo`});

        })

        textGO.on('pointerout', () =>{
            textGO.setStyle({fill: `#fff`});

        })

        textGO.on('pointerup', () =>{
           menuItem.scene && this.scene.start(menuItem.scene);

           if (menuItem.text === 'Exit the Game'){
                this.game.destroy(true);
           }
        })
    }

}
export default MenuScene;