import { Router } from "express";

const router = Router();

router.get("/hello", async (req, res) => {
    return res.status(200).json({
        message: "Hello, World"
    })
})
router.get("/dummy", async (req, res) => {
    return res.status(200).json({
        data: {
            gilinore:{
                gameId:1,
                title:"Gilinore",
                gameInfo:"with Orcs,vampires and dragons battle to be the last one standing",
         
            },
            spaceFighters:{   
                gameId:2,
                title:"Space Fighters",
                gameInfo:"You are lost in space and have to fight your way home!",
              
            },
            rampart:{
                gameId:3,
                title:"Rampart",
                gameInfo:"Build a city to defend against invaders",
              

            },
        },
    })
})
export default router;