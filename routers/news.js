const { Router } = require("express");
const News = require('../models').newsFeed
const authMiddleware = require("../auth/middleware");


const router = new Router();

router.get('/', async (req,res,next) => {
    //console.log(News)
    try {
        const news = await News.findAll({
            order:[['id', 'DESC']]
        })
        res.status(200).send(news)
    } catch(e){
        console.log(e.message)
        return res.status(400).send("Something went wrong")
    }
})

router.post('/new', authMiddleware , async (req,res,next) =>{
    const { title, description, link, img} = req.body
    if(!title || !description || !link || !img){
        return res.status(400).send("Please fill in all fields")
    }
    if(!req.user.isPlanner){
        return res.status(400).send("You are not a planner! bold")
    }
    try{
        const newNews = await News.create({
            title,
            description,
            link,
            img
        })
        const news = await News.findAll({
            order:[['id', 'DESC']]
        })
        res.status(200).send(news)

    }catch(e){
        console.log(e.message)
        return res.status(400).send("Something went wrong")
    }
})

router.delete('/delete/:newsFeedId', authMiddleware, async (req,res,next) =>{
    const { newsFeedId } = req.params
    try {
        await News.destroy({
            where:{id:newsFeedId}
        })

        const news = await News.findAll({
            order:[['id', 'DESC']]
        })
        res.status(200).send(news)
        
    }catch(e){
        console.log(e.message)
        return res.status(400).send("Date is wrong")
    }
})

module.exports = router;