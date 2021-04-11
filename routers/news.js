const { Router } = require("express");
const News = require('../models').newsFeed

const router = new Router();

router.get('/', async (req,res,next) => {
    console.log(News)
    try {
        const news = await News.findAll({
            order:[['id', 'ASC']]
        })
        res.status(200).send(news)
    } catch(e){
        console.log(e.message)
        return res.status(400).send("Something went wrong")
    }
})

module.exports = router;