const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema({
    jobId: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },
    candidateId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    fname:String,
    lname:String,
    email:String,
    phoneNumber:String,
    resume: String,
    coverLetter: String,
    appliedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Application", ApplicationSchema);