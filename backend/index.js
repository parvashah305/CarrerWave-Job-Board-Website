const express =require('express')
const mongoose=require('mongoose')
const {registerUser,loginUser,protect,authorize,postJob,applyJob, getJob, checkAuth, logout, getAllJobs, getJobById, getEmployerDashboard, getCandidateDashboard}= require('./controllers/authController')
const cors=require('cors')
const cookieParser=require('cookie-parser')
const upload = require('./middlewares/uploadMiddleware')
require('dotenv').config()

const app=express()
const PORT=4000

app.use(express.json())
app.use(
    cors({
      origin: "https://carrer-wave.vercel.app",
      credentials: true, 
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type, Authorization"
    })
  );
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
app.post('/logout',logout)
app.get('/check-Auth',checkAuth)
app.post('/post-job',protect,authorize(["employer"]),postJob)
app.get('/get-job',getAllJobs)
app.get('/get-job/:jobId',getJobById)
app.post('/apply-job/:jobId',protect,authorize(["candidate"]),upload.fields([{name:'resume',maxCount:1}]),applyJob)
app.get('/employer/dashboard', protect, authorize(["employer"]), getEmployerDashboard);
app.get('/candidate/dashboard', protect, authorize(["candidate"]), getCandidateDashboard);

app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`)
})