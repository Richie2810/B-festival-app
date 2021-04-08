const { Router } = require("express");
const Act = require('../models').act

const router = new Router();

router.get('/', async (req,res,next) => {
    try{
        const acts = await Act.findAll({
            order:[['start_time', "DESC"]]
        })
        res.status(200).send(acts)
    } catch(e){
        console.log(e.message)
        return res.status(400).send("Something went wrong")
    }
}) 

module.exports = router;