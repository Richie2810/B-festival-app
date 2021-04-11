const { Router } = require("express");
const Stage = require('../models').stage
const Act = require('../models').act
const User = require('../models').user
const authMiddleware = require("../auth/middleware");

const router = new Router();

router.post('/', async (req,res,next) => {
    try {
        const { day } = req.body
        //console.log(day)
        const actPerDay = await Stage.findAll({
            include : [{
                model: Act,
                where: {day:day},
                include: User,
            }],
            order: [['id', 'ASC']]
        })

        return res.status(200).send(actPerDay)

    } catch (error) {
        console.log(error);
        return res.status(400).send({ message: "Something went wrong, sorry" });
    }
})

router.get('/:stageId', async (req,res,next) => {
    try {
        const stage = await Stage.findByPk(parseInt(req.params.stageId),
        {
            include: [{
                model:Act,
                include:[{
                    model:User,
                }]
            }],
                order: [[Act, "day", "ASC"]]    
        })
        console.log(stage.dataValues)
        return res.status(200).send(stage) 

    } catch (error) {
        console.log(error);
        return res.status(400).send({ message: "Something went wrong, sorry" });
    }
})

module.exports = router;