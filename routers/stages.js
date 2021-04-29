const { Router } = require("express");
const Stage = require('../models').stage
const Act = require('../models').act
const User = require('../models').user
const Crew = require('../models').crew
const Tracker = require('../models').tracker
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
            order: [[Act, 'start_time', 'DESC']]
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
                order: [[Act, "day", "ASC"],[Act, 'start_time', 'DESC']] 

        })
        console.log(stage.dataValues)
        return res.status(200).send(stage) 

    } catch (error) {
        console.log(error);
        return res.status(400).send({ message: "Something went wrong, sorry" });
    }
})

router.post('/forCrew', authMiddleware, async (req,res,next) => {
    //console.log('HERE~~~')
    try {
        const stage = await Stage.findAll({
            include:{
                model:Crew,
                include:Tracker
            },
            order: [['id', 'ASC']]
        })
        return res.status(200).send(stage)
    }catch (error) {
        console.log(error);
        return res.status(400).send({ message: "Something went wrong, sorry" });
    }
})

router.post('/moveCrew', authMiddleware, async (req,res,next)=> {
    const { stageId, crewId } = req.body
    console.log('this is the crews id', crewId)
    try {
        const crew = await Crew.findByPk(parseInt(crewId))
        await crew.update({stageId})
        const stage = await Stage.findAll({
            include:{
                model:Crew,
                include:Tracker
            },
            order: [['id', 'ASC']]
        })
        return res.status(200).send(stage)
    } catch(e){
        console.log(e.message)
        return res.status(400).send("Something went wrong")
    }
})

module.exports = router;