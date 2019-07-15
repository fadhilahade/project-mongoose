require('dotenv').config()

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const db = require('./src/config/database')

const homeRouter = require("./src/routes/home")
const userRouter = require('./src/routes/user')

if(!db){
    console.log('cannot connect to database')
} else {
    console.log("connected to database")
}


app.use("/", homeRouter)
app.use('/user', userRouter)


app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`)
})
