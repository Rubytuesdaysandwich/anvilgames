 export createGameConfig(width,height,scene,gravity,physcicsType){
    return{

        type:Phaser.AUTO,
        width:width,
        height:height,
        scene:scene,
        physcics:{
            default:physcicsType,
            [physcicsType]:{
                gravity:{y:gravity}
            }
        }
    }
}