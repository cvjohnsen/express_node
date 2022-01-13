const express = require('express')
const data = require('..data/learnerData')
const learnerRoute = express.Router()

learnerRoute.get('/', (req, res)=> {
res.status(200).json({Learners: data})
})

learnerRoute.get('/:idx', (req,res)=>{
    let idx = Number(reg.params.idx)
    if (idx >= data.length || idx < 0){
      res.status(404).json({message: "Learner Not Found!"})
    }else{
      res.status(200).json({Learner: data[idx]})
    }
})



module.exports = learnerRouter