const express = require('express')
const bodyParser = require('body-parser')
const port = 6000
const app = express ()

const learnerRoute = require('./routes/learnerRoute')


app.use(bodyParser.json())
app.use('./learners', learnerRoute)

app.get('/', (req, res) =>{
res.status(200).json({message: "API UP!"})
})

app.listen(port, () => {
console.log ("Server Is Listening")
});