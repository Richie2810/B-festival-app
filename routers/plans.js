const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const Plan = require('../models').plan
const Act = require('../models').act
const Stage = require('../models').stage
const User = require('../models').user

const router = new Router();

router.get('/', authMiddleware, async (req,res,next)=>{
    console.log('This is the users id', req.user.id)
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

module.exports = router;