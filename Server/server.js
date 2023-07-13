const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const port = 4000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/projects', require("./routes/projectRoutes"))

app.use(errorHandler)
app.listen(port, ()=> console.log(`Server started in port ${port}`))