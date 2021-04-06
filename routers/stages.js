const { Router } = require("express");
const Stage = require('../models').stage
const Act = require('../models').act

const router = new Router();

router.post('/', async (req,res,next) => {
    try {
        const { day } = req.body
        console.log(day)
        const actPerDay = await Stage.findAll({
            include : [{
                model: Act,
                where: {day:day},
            }],
        })

        return res.status(200).send(actPerDay)

    } catch (error) {
        console.log(error);
        return res.status(400).send({ message: "Something went wrong, sorry" });
    }
})

module.exports = router;