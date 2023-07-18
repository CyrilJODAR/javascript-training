let mockCoworkings = require('./db/mock-coworkings')
const coworkingRouter = require('./router/coworkingsRouter')
const sequelize = require('./db/sequelize')

const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3001

sequelize.initDatabase()

app.use(express.json())
app.use(morgan("dev"))
app.use('/api/coworkings', coworkingRouter)
app.listen(port, () =>{
    console.log(`my port is ${port}`);
})

