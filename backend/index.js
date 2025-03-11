const express =require('express')
const mongoose=require('mongoose')
const {registerUser,loginUser,protect,authorize,postJob,applyJob, getJob}= require('./controllers/authController')
const cors=require('cors')
const cookieParser=require('cookie-parser')
const upload = require('./middlewares/uploadMiddleware')
require('dotenv').config()

const app=express()
const PORT=3000

app.use(express.json())
app.use(cors())
app.use(cookieParser())

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("Database Connected")
})
.catch((e)=>{
    console.log(e)
})

app.post('/registerUser',registerUser)
app.post('/loginUser',loginUser)
app.post('/post-job',protect,authorize(["employer"]),postJob)
app.get('/get-job',getJob)
app.post('/apply-job/:jobId',protect,authorize(["candidate"]),upload.fields([{name:'resume',maxCount:1},{name:'coverLetter',maxCount:1}]),applyJob)

app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`)
})