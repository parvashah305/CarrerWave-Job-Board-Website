import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function PostJobPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    location: "",
    jobType: "",
    category: "",
    salaryMin: "",
    salaryMax: "",
    experienceLevel: "",
    jobSummary: "",
    detailedDescription: "",
    benefitsAndPerks: "",
    requirements: "",
    applicationInstructions: "",
    deadline: "",
    resume: true,
    coverLetter: false,
  });

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("http://localhost:4000/check-Auth", {
          method: "GET",
          credentials: "include",
        });
  
        if (response.ok) {
          const data = await response.json();
          if (!data.isAuthenticated || data.user.role !== "employer") {
            toast.error("Access denied: Only employers can post jobs.");
            navigate("/login"); // Redirect unauthorized users
          } else {
            setIsAuthenticated(true);
          }
        } else {
          toast.error("Failed to verify authentication. Please log in.");
          navigate("/login"); // Redirect on authentication failure
        }
      } catch (error) {
        console.error("Error checking authentication:", error.message);
        navigate("/login");
      }
    };
  
    checkAuth();
  }, [navigate]);
  
  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const validateStep = (step) => {
    switch(step) {
      case 1:
        // Validate basic info
        if (!formData.jobTitle || !formData.companyName || !formData.location || !formData.jobType || !formData.category) {
          toast.error("Please fill in all required fields");
          return false;
        }
        return true;
      case 2:
        // Validate description
        if (!formData.jobSummary || !formData.detailedDescription) {
          toast.error("Please provide job summary and detailed description");
          return false;
        }
        return true;
      default:
        return true;
    }
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Final validation before submission
    if (!formData.requirements) {
      toast.error("Please specify job requirements");
      return;
    }
    
    try {
      const response = await fetch("http://localhost:4000/post-job", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        toast.success("Job posted successfully!");
        setTimeout(() => {
          navigate("/employer/dashboard");
        }, 2000);
      } else if (response.status === 403) {
        const errorData = await response.json();
        toast.error(errorData.message || "You are not authorized to perform this action.");
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Failed to post job");
      }
    } catch (error) {
      console.error("Error posting job:", error);
      toast.error("An error occurred while posting the job");
    }
  };
  
  if (!isAuthenticated) {
    return <div className="container px-4 py-10 mx-auto">Verifying authentication...</div>;
  }
  
  return (
    <div className="container px-4 py-10 mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Post a New Job</h1>
        <p className="text-gray-500 dark:text-gray-400">Create a job listing to find the perfect candidate</p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="p-6">
          <div className="mb-8">
            <div className="grid w-full grid-cols-3 mb-8">
              <button
                className={`px-4 py-2 text-sm font-medium rounded-l-md ${
                  currentStep >= 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-500 dark:bg-gray-700"
                }`}
                onClick={() => setCurrentStep(1)}
              >
                Basic Info
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium ${
                  currentStep >= 2
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-500 dark:bg-gray-700"
                }`}
                onClick={() => currentStep >= 2 && setCurrentStep(2)}
              >
                Description
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium rounded-r-md ${
                  currentStep >= 3
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-500 dark:bg-gray-700"
                }`}
                onClick={() => currentStep >= 3 && setCurrentStep(3)}
              >
                Requirements
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Step 1: Basic Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="jobTitle" className="text-sm font-medium">Job Title</label>
                    <div className="relative">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-3 h-4 w-4 text-gray-500">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      </svg>
                      <input
                        id="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleInputChange}
                        placeholder="e.g. Frontend Developer"
                        className="w-full rounded-md border border-gray-300 bg-white px-9 py-2 text-sm placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-400"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="companyName" className="text-sm font-medium">Company Name</label>
                      <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-3 h-4 w-4 text-gray-500">
                          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                        </svg>
                        <input
                          id="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          placeholder="e.g. TechCorp"
                          className="w-full rounded-md border border-gray-300 bg-white px-9 py-2 text-sm placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-400"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="location" className="text-sm font-medium">Location</label>
                      <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-3 h-4 w-4 text-gray-500">
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <input
                          id="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          placeholder="e.g. San Francisco, CA or Remote"
                          className="w-full rounded-md border border-gray-300 bg-white px-9 py-2 text-sm placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-400"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="jobType" className="text-sm font-medium">Job Type</label>
                      <select
                        id="jobType"
                        value={formData.jobType}
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-400"
                        required
                      >
                        <option value="">Select job type</option>
                        <option value="full-time">Full-time</option>
                        <option value="part-time">Part-time</option>
                        <option value="contract">Contract</option>
                        <option value="internship">Internship</option>
                        <option value="temporary">Temporary</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="category" className="text-sm font-medium">Category</label>
                      <select
                        id="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-400"
                        required
                      >
                        <option value="">Select category</option>
                        <option value="engineering">Engineering</option>
                        <option value="design">Design</option>
                        <option value="product">Product</option>
                        <option value="marketing">Marketing</option>
                        <option value="sales">Sales</option>
                        <option value="customer-service">Customer Service</option>
                        <option value="finance">Finance</option>
                        <option value="hr">Human Resources</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="salaryMin" className="text-sm font-medium">Salary Range</label>
                      <div className="flex items-center gap-2">
                        <div className="relative flex-1">
                          <div className="absolute flex justify-center items-center left-3 top-3 h-4 w-4 text-gray-500">
                          &#8377;
                          </div>
                          <input
                            id="salaryMin"
                            type="number"
                            value={formData.salaryMin}
                            onChange={handleInputChange}
                            placeholder="Min"
                            className="w-full rounded-md border border-gray-300 bg-white px-9 py-2 text-sm placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-400"
                          />
                        </div>
                        <span>to</span>
                        <div className="relative flex-1">
                        <div className="absolute flex justify-center items-center left-3 top-3 h-4 w-4 text-gray-500">
                          &#8377;
                          </div>
                          <input
                            id="salaryMax"
                            type="number"
                            value={formData.salaryMax}
                            onChange={handleInputChange}
                            placeholder="Max"
                            className="w-full rounded-md border border-gray-300 bg-white px-9 py-2 text-sm placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-400"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="experienceLevel" className="text-sm font-medium">Experience Level</label>
                      <select
                        id="experienceLevel"
                        value={formData.experienceLevel}
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-400"
                      >
                        <option value="">Select experience level</option>
                        <option value="entry">Entry Level</option>
                        <option value="mid">Mid Level</option>
                        <option value="senior">Senior Level</option>
                        <option value="executive">Executive</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-primary-foreground hover:bg-blue-700 h-9 px-4 py-2"
                      onClick={handleNextStep}
                    >
                      Next: Job Description
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Job Description */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="jobSummary" className="text-sm font-medium">Job Summary</label>
                    <textarea
                      id="jobSummary"
                      value={formData.jobSummary}
                      onChange={handleInputChange}
                      placeholder="Provide a brief overview of the position and your company"
                      rows={4}
                      className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="detailedDescription" className="text-sm font-medium">Detailed Description</label>
                    <textarea
                      id="detailedDescription"
                      value={formData.detailedDescription}
                      onChange={handleInputChange}
                      placeholder="Describe the role in detail, including day-to-day responsibilities"
                      rows={8}
                      className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="benefitsAndPerks" className="text-sm font-medium">Benefits and Perks</label>
                    <textarea
                      id="benefitsAndPerks"
                      value={formData.benefitsAndPerks}
                      onChange={handleInputChange}
                      placeholder="List the benefits and perks offered with this position"
                      rows={4}
                      className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-400"
                    />
                  </div>

                  <div className="flex justify-between">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                      onClick={handlePrevStep}
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-primary-foreground hover:bg-blue-700 h-9 px-4 py-2"
                      onClick={handleNextStep}
                    >
                      Next: Requirements
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Requirements and Application */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="requirements" className="text-sm font-medium">Requirements</label>
                    <textarea
                      id="requirements"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      placeholder="List the qualifications, skills, and experience required for this position"
                      rows={6}
                      className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-400"
                      required
                    />
                    <p className="text-sm text-gray-500">Tip: Use bullet points for better readability</p>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="applicationInstructions" className="text-sm font-medium">Application Instructions</label>
                    <textarea
                      id="applicationInstructions"
                      value={formData.applicationInstructions}
                      onChange={handleInputChange}
                      placeholder="Provide any specific instructions for applicants (optional)"
                      rows={4}
                      className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Application Deadline</label>
                    <input
                      id="deadline"
                      type="date"
                      value={formData.deadline}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        id="resume"
                        type="checkbox"
                        checked={formData.resume}
                        onChange={handleInputChange}
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                      />
                      <label htmlFor="resume" className="ml-2 block text-sm">
                        Require resume upload
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="coverLetter"
                        type="checkbox"
                        checked={formData.coverLetter}
                        onChange={handleInputChange}
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                      />
                      <label htmlFor="coverLetter" className="ml-2 block text-sm">
                        Require cover letter
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                      onClick={handlePrevStep}
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-primary-foreground hover:bg-blue-700 h-9 px-4 py-2"
                    >
                      Post Job
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostJobPage;