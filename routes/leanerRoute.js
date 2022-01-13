const express = require('express')
const data = require('..data/learnerData')
const learnerRouter = express.Router()

learnerRouter.get('/', (req, res)=> {
res.status(200).json({Learners: data})
})

learnerRouter.get('/:idx', (req,res)=>{
    let idx = Number(reg.params.idx)
    if (idx >= data.length || idx < 0){
      res.status(404).json({message: "Learner Not Found!"})
    }
    
})



module.exports = learnerRouter