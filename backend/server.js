require('dotenv').config()

const express =  require('express')
const mongoose =  require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')



//express app
const app = express()

// middleware
app.use(express.json())//to access body in request

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})//for logging in log file

// routes
app.use('/api/workouts',workoutRoutes)
app.use('/api/user',userRoutes)

// connect to db
mongoose.connect(process.env.MONG_URI).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log('Connected to mongodb')
    })
}).catch((error)=>{
    console.log(error)
})

// listen for requests 
