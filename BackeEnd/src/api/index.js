import { Router } from "express";

const router = Router();

router.get("/users", async (req, res) => {
    return res.status(200).json({
        users:[
            {}
        ]
    })
})
router.get("/dummy", async (req, res) => {
    return res.status(200).json({
        games: [
            {
                id:1,
                title:"Gilinore",
                gameInfo:"with Orcs,vampires and dragons battle to be the last one standing",
               
            },
            {   
                id:2,
                title:"Space Fighters",
                gameInfo:"You are lost in space and have to fight your way home!",
                
            },
            {
                id:3,
                title:"Rampart",
                gameInfo:"Build a city to defend against invaders",
                
              

            },
            {
                id:4,
                title:"Vampires",
                gameInfo:"Become a vampire",
               
            },
            {   
                id:5,
                title:"Planet Destroyers",
                gameInfo:"Make an army and vanquish other planets to keep your planet alive",
                
            },
            {
                id:6,
                title:"Wizardly",
                gameInfo:"Use magic in a world of wizards",
                
              

            },
        ],
    })
})
export default router;