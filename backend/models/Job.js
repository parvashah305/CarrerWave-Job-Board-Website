const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    employerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
   jobTitle: { type: String, required: true },
   companyName: { type: String, required: true },
   location: { type: String, required: true },
   jobType: { type: String, required: true },
   category: { type: String, required: true },
   salaryMin: { type: Number, required: true },
   salaryMax: { type: Number, required: true },
   experienceLevel: { type: String, required: true },
   jobSummary: { type: String, required: true },
   detailedDescription: { type: String, required: true },
   benefitsAndPerks: { type: String },
   requirements: { type: String, required: true },
   applicationInstructions: { type: String },
   deadline: { type: Date },
   resume: { type: Boolean, default:true},
   coverLetter: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model("Job", JobSchema);