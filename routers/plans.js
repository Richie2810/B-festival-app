const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const Plan = require('../models').plan
const Act = require('../models').act
const Stage = require('../models').stage
const User = require('../models').user

const router = new Router();

router.get('/', authMiddleware, async (req,res,next)=>{
    try{
        const user = await User.findByPk(req.user.id,
            {
                include: Act
            })
        res.status(200).send(user.acts)
    } catch(e){
        console.log(e.message)
        return res.status(400).send("Date is wrong")
    }
})

router.post('/addPlan',authMiddleware, async (req,res,next) => {
    const { actId } = req.body
    console.log(actId)
    try {
        const newPlan = await Plan.create({
            userId: req.user.id,
            actId
        })
        const user = await User.findByPk(req.user.id,
            {
                include: Act
            })
        return res.status(200).send(user.acts)
    } catch(e){
        console.log(e.message)
        return res.status(400).send("Date is wrong")
    }
})

router.delete('/removePlan/:actId', authMiddleware, async (req,res,next) => {
    const { actId } = req.params
    console.log('this is the acts ID', actId)
    try {
        await Plan.destroy({
            where: {
                actId:actId,
                userId:req.user.id,
            }
        })

        const user = await User.findByPk(req.user.id,
            {
                include: Act
            })
        return res.status(200).send(user.acts)
    } catch(e){
        console.log(e.message)
        return res.status(400).send("Date is wrong")
    }
})

module.exports = router;