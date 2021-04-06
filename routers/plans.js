const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const Plan = require('../models').plan
const Act = require('../models').act
const Stage = require('../models').stage

const router = new Router();

router.get('/', authMiddleware, async (req,res,next)=>{
    console.log('This is the users id', req.user.id)
    try{
        const plans = await Plan.findAll({
            where: {userId:req.user.id},
            include: {model: Act}
        })
        res.status(200).send(plans)
    } catch(e){
        console.log(e.message)
        return res.status(400).send("Date is wrong")
    }
})

module.exports = router;