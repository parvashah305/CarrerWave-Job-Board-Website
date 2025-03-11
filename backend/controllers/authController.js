const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const mongoose=require('mongoose')
const User=require('../models/User')
const Job=require('../models/Job')
const Application = require('../models/Application')
const { application } = require('express')
require('dotenv').config()

exports.registerUser=async(req,res)=>{
   try {
    const {name,email,password,role,company,resume} = req.body

    if(!name||!email||!password||!role){
        return res.status(400).json({message:"Name,Email,Passsword,Role are required"})
    }

    const userExist=await User.findOne({email})

    if(userExist){
        return res.status(400).json({message:"User found with this email"})
    }

    const newUser= new User({
        name,
        email,
        password,
        role,
        company: role === "employer" ? company : undefined,
        resume: role === "candidate" ? resume : undefined,
    })

    await newUser.save()

    return res.status(200).json({message:"User Registered Successfully",User:newUser})
   } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Internal Server Error"})
   }
}

exports.loginUser=async(req,res)=>{
    try {
        const {email,password}=req.body

        if(!email||!password){
            return res.status(400).json({message:"Email and Password are required"})
        }

        const user=await User.findOne({email})
        if(!user){
            return res.status(400).json({message:"User Not Found"})
        }

        const passMatch=await user.matchPassword(password)

        if(!passMatch){
            return res.status(400).json({message:"Incorrect Password"})
        }

        const token=jwt.sign(
            { id: user._id, name: user.name, email: user.email, role:user.role },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '24h' }
        )

        res.cookie('jwt',token,{
            httpOnly:true,
            secure:true,
            sameSite:'strict',
            maxAge: 24 * 60 * 60 * 1000,
        })

        return res.status(200).json({token,message:"Login Successfully",user})

    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Internal Server Error"})
    }
}

exports.protect=(req,res,next)=>{
    const token=req.cookies.jwt
    if(!token){
        return res.status(400).json({message:"Unauthorized or Authoriztion token not provided"})
    }
    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY)
        console.log(decoded)
        req.user=decoded
        next()
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Internal Server Error"})
    }
}

exports.authorize=(roles)=>(req,res,next)=>{
    console.log(req.user.role)
    if(!roles.includes(req.user.role)){
        return res.status(400).json({message:"Access denied"})
    }
    next()
}

exports.postJob=async(req,res)=>{

    try {
        const {title,company,location,description,salary,requirements}=req.body

        if(!title||!company||!location||!description||!salary||!requirements){
            return res.status(400).json({message:"All fields are required"})
        }
    
        const newJob= await Job({
            title,
            company,
            location,
            description,
            salary,
            requirements
        })
    
        await newJob.save()
    
        return res.status(200).json({message:"Job added Successfully",Job:newJob})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Internal Server Error"})
    }
  
}

exports.getJob = async (req, res) => {
    try {
        const { search, minSalary, maxSalary, sort, page = 1, limit = 10 } = req.query;

        let query = {};
        if (search && search.length >= 3) {
            query.$or = [
                { title: { $regex: search, $options: "i" } },     
                { location: { $regex: search, $options: "i" } },   
                { category: { $regex: search, $options: "i" } },   
                { company: { $regex: search, $options: "i" } }     
            ];
        }

        if (minSalary && maxSalary) {
            query.salary = { $gte: minSalary, $lte: maxSalary };
        } else if (minSalary) {
            query.salary = { $gte: minSalary };
        } else if (maxSalary) {
            query.salary = { $lte: maxSalary };
        }

        const sortOption = sort === "latest" ? { createdAt: -1 } : { createdAt: 1 };

        const jobs = await Job.find(query)
            .sort(sortOption)
            .skip((page - 1) * limit)
            .limit(Number(limit));

        return res.status(200).json({ message: "Jobs Fetched Successfully", jobs });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.applyJob=async(req,res)=>{
    try {
        const {jobId}=req.params
        const candidateId=req.user.id

        const {name,email,phoneNumber}=req.body

        if(!name||!email||!phoneNumber||!req.files.resume||!req.files.coverLetter){
            return res.status(400).json({message:"All fields are required"})
        }

        const resumePath = req.files.resume[0].path
        const coverLetterPath = req.files.coverLetter[0].path

        const newApplication=await new Application({
            jobId,
            candidateId,
            name,
            email,
            phoneNumber,
            resume:resumePath,
            coverLetter:coverLetterPath
        })

        await newApplication.save()

        return res.status(200).json({message:"Job Application Applied Successfully",application:newApplication})

    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Internal Server Error"})
    }
}