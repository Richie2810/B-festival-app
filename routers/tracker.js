const { Router } = require("express");
const Tracker = require('../models').tracker

const router = new Router();

router.get('/', async (req,res,next) => {
    try{
        const tracker = await Tracker.findAll()
        console.log('this is the tracker~~~~',tracker)
        return res.status(200).send(tracker)
    }catch(e){
        console.log(e.message)
        return res.status(400).send("Something went wrong")
    }
})

router.post('/changeStatus', async (req,res,next) => {
    const { trackerId, isEnabled } = req.body
    try{
        const trackerToChange = await Tracker.findByPk(trackerId)
        console.log(trackerToChange)
        await trackerToChange.update({isEnabled:!isEnabled})
        const tracker = await Tracker.findAll()
        return res.status(200).send(tracker)
    }catch(e){
        console.log(e.message)
        return res.status(400).send("Something went wrong")
    }
})

router.post('/equipId', async (req,res,next) => {
    const { equipId } = req.body
    console.log(equipId)
    try{
        const tracker = Tracker.findByPk(equipId)
        console.log(tracker)
        res
    }catch(e){
        console.log(e.message)
        return res.status(400).send("Something went wrong")
    }
})

router.post('/startTracking', async (req,res,next) => {
    console.log('here')
    const { userID, GKId, longitude, latitude} = req.body
    try {
        console.log('this is the users ID', userID)
        const tracker = await Tracker.findByPk(GKId)
        await tracker.update({
            crewId:userID,
            longitude,
            latitude
        })
        res.status(201).send(tracker)

    } catch (error) {
        console.log(error);
        return res.status(400).send({ message: "Something went wrong, sorry" });
    }
})

module.exports = router;
