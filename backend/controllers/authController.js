const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const mongoose=require('mongoose')
const User=require('../models/User')
const Job=require('../models/Job')
const Application = require('../models/Application')
const { application } = require('express')
require('dotenv').config()

exports.registerUser = async (req, res) => {
    try {
      const { fname, lname, email, password, confirmPassword, role, company } = req.body;
  
     
      if (!fname || !lname || !email || !password || !role) {
        return res.status(400).json({ message: "First Name, Last Name, Email, Password, and Role are required" });
      }
  
     
      const userExist = await User.findOne({ email });
  
      if (userExist) {
        return res.status(400).json({ message: "User found with this email" });
      }
  
 
      if (password !== confirmPassword) {
        return res.status(400).json({ message: "Passwords do not match" });
      }
  
     
      const newUser = new User({
        fname,
        lname,
        email,
        password, 
        role,
        company: role === "employer" ? company : undefined,
      });
  
      await newUser.save();
  
      return res.status(201).json({ message: "User Registered Successfully", user: newUser });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };

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
            { id: user._id, name: user.fname, email: user.email, role:user.role },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '24h' }
        )

        res.cookie("jwt", token, {
            httpOnly: true,        
            secure: process.env.NODE_ENV === "production", 
            sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax", 
            maxAge: 24 * 60 * 60 * 1000, 
        });

        return res.status(200).json({token,message:"Login Successfully",user})

    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Internal Server Error"})
    }
}

exports.logout=(req,res)=>{
    res.clearCookie('jwt')
    res.status(200).send({ message: "Logged out successfully" });
}

exports.checkAuth=(req,res)=>{
    const token=req.cookies.jwt
    if(!token){
        return res.status(400).json({isAuthenticated: false,message:"No Token"})

    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        res.status(200).json({ isAuthenticated: true, user: decoded });
    } catch (error) {
        console.error("JWT verification error:", error);
        res.status(200).json({ isAuthenticated: false });
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
        return res.status(403).json({message:"Access denied"})
    }
    next()
}

exports.postJob = async (req, res) => {
    try {
        const {
            jobTitle, companyName, location, jobType, category, salaryMin, salaryMax,
            experienceLevel, jobSummary, detailedDescription, benefitsAndPerks,
            requirements, applicationInstructions, deadline, resume, coverLetter
        } = req.body;

        if (!jobTitle || !companyName || !location || !jobType || !category || !salaryMin || !salaryMax ||
            !experienceLevel || !jobSummary || !detailedDescription || !requirements) {
            return res.status(400).json({ message: "All required fields must be filled" });
        }

        const newJob = new Job({
            employerId: req.user.id,
            jobTitle, companyName, location, jobType, category, salaryMin, salaryMax,
            experienceLevel, jobSummary, detailedDescription, benefitsAndPerks,
            requirements, applicationInstructions, deadline, resume, coverLetter
        });

        await newJob.save();
        return res.status(201).json({ message: "Job added successfully", job: newJob });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        return res.status(200).json(jobs);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.getJobById= async(req,res)=>{
    try {
        const {jobId}=req.params
        const job= await Job.findById(jobId)
        if(!job){
            return res.status(404).json({message:"Job not found"})
        }
        return res.status(200).json(job)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Internal Server Error"})
    }
}


exports.applyJob = async (req, res) => {
    try {
        const { jobId } = req.params;
        const candidateId = req.user?.id; 

        if (!candidateId) {
            return res.status(401).json({ message: "Unauthorized. Please log in." });
        }

      
        const { fname, lname, email, phoneNumber, coverLetter } = req.body;

       
        const resumeFile = req.files?.resume?.[0]; 

        if (!fname || !lname || !email || !phoneNumber || !resumeFile) {
            return res.status(400).json({ 
                message: "All fields are required",
                received: {
                    fname: !!fname,
                    lname: !!lname,
                    email: !!email,
                    phoneNumber: !!phoneNumber,
                    file: !!resumeFile
                }
            });
        }

        const resumePath = resumeFile.path;

        const newApplication = new Application({
            jobId,
            candidateId,
            fname,
            lname,
            email,
            phoneNumber,
            resume: resumePath,
            coverLetter: coverLetter || "",
        });

        await newApplication.save();

        return res.status(200).json({ 
            message: "Job application submitted successfully", 
            application: newApplication 
        });

    } catch (error) {
        console.error("Application error:", error);
        return res.status(500).json({ 
            message: "Internal server error",
            error: error.message 
        });
    }
};

exports.getEmployerDashboard = async (req, res) => {
    try {
        const employerId = req.user.id; 

       
        const jobs = await Job.find({ employerId });

        
        const jobStats = await Promise.all(jobs.map(async (job) => {
            const applicantCount = await Application.countDocuments({ jobId: job._id });
            return {
                jobId: job._id,
                jobTitle: job.jobTitle,
                companyName: job.companyName,
                location: job.location,
                jobType: job.jobType,
                category: job.category,
                applicants: applicantCount,
                status: job.deadline && new Date(job.deadline) > new Date() ? 'Active' : 'Closed'
            };
        }));

       
        const activeJobsCount = jobs.filter(job => job.deadline && new Date(job.deadline) > new Date()).length;

        return res.status(200).json({
            totalJobs: jobs.length,
            activeJobs: activeJobsCount,
            jobs: jobStats
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.getCandidateDashboard = async (req, res) => {
    try {
        const candidateId = req.user.id;
        console.log("Candidate ID:", candidateId);

        const applications = await Application.find({ candidateId }).lean();
        console.log("Applications Found:", applications);

        if (applications.length === 0) {
            return res.status(200).json({ totalAppliedJobs: 0, appliedJobs: [] });
        }

        const populatedApplications = await Application.find({ candidateId })
            .populate({
                path: "jobId",
                select: "jobTitle companyName location jobType"
            })
            .lean();

        console.log("Populated Applications:", populatedApplications);

        const appliedJobs = populatedApplications.map(application => ({
            jobTitle: application.jobId?.jobTitle || "Job Deleted",
            companyName: application.jobId?.companyName || "N/A",
            location: application.jobId?.location || "N/A",
            jobType: application.jobId?.jobType || "N/A",
            appliedAt: application.appliedAt
        }));

        return res.status(200).json({
            totalAppliedJobs: appliedJobs.length,
            appliedJobs
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};