const { Router } = require("express");
const Crew = require('../models').crew
const Stage = require('../models').stage
const Tracker = require('../models').tracker
const authMiddleware = require("../auth/middleware");



const router = new Router();

router.get('/', async (req,res,next) => {
    try{
        const crew = await Crew.findAll({
            include:[ Tracker, Stage ]
        })
        res.status(200).send(crew)
    } catch(e){
        console.log(e.message)
        return res.status(400).send("Something went wrong")
    }
}) 

module.exports = router;
