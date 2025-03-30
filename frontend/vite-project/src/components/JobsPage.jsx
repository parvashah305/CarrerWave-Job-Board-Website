import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [jobType, setJobType] = useState("all");
  const [location, setLocation] = useState("all");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:4000/get-job", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
    
        if (!response.ok) throw new Error("Failed to fetch jobs");
    
        const data = await response.json();
        
        
        const jobsArray = Array.isArray(data) 
          ? data
          : data.jobs || 
            data.data?.jobs || 
            []; 
        
        setJobs(jobsArray);
        setError("");
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError("Unable to load jobs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
  
    fetchJobs();
  }, []);

 
  const transformJobData = (job) => ({
    id: job._id,
    title: job.jobTitle,
    company: job.companyName,
    location: job.location,
    type: job.jobType,
    category: job.category,
    salary: `$${job.salaryMin?.toLocaleString()} - $${job.salaryMax?.toLocaleString()}`,
    posted: "Recently", // You might want to calculate this based on createdAt
    logo: "https://via.placeholder.com/40", // Default placeholder if no logo
    description: job.jobSummary,
    detailedDescription: job.detailedDescription,
    requirements: job.requirements,
    benefits: job.benefitsAndPerks,
  });

  // Filter jobs based on search and filters
  const filteredJobs = jobs
    .map(transformJobData)
    .filter((job) => {
      const matchesSearch = 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesType = jobType === "all" || job.type === jobType;
      const matchesLocation = location === "all" || job.location.includes(location);
      const matchesCategory = category === "all" || job.category === category;
      
      return matchesSearch && matchesType && matchesLocation && matchesCategory;
    });

  if (loading) {
    return (
      <div className="container px-4 py-10 mx-auto text-center">
        <p>Loading jobs...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container px-4 py-10 mx-auto text-center text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="container px-4 py-10 mx-auto">
      <h1 className="text-3xl font-bold mb-6">Browse Jobs</h1>
      
      {/* Search and Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-8 shadow-sm">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-3 h-4 w-4 text-gray-500">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              placeholder="Search jobs by title, company, or keywords"
              className="w-full rounded-md border border-gray-300 bg-white px-9 py-2 text-sm placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <select 
              value={jobType} 
              onChange={(e) => setJobType(e.target.value)}
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-400"
            >
              <option value="all">All Types</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
            
            <select 
              value={location} 
              onChange={(e) => setLocation(e.target.value)}
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-400"
            >
              <option value="all">All Locations</option>
              <option value="Remote">Remote</option>
              <option value="San Francisco">San Francisco</option>
              <option value="Bengaluru">Bengaluru</option>
              <option value="Austin">Austin</option>
              <option value="Chicago">Chicago</option>
              <option value="Seattle">Seattle</option>
              <option value="Boston">Boston</option>
            </select>
            
            <select 
              value={category} 
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-400"
            >
              <option value="all">All Categories</option>
              <option value="Software Development">Software Development</option>
              <option value="Design">Design</option>
              <option value="Product">Product</option>
              <option value="Marketing">Marketing</option>
              <option value="Data">Data</option>
              <option value="Human Resources">Human Resources</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Job Listings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div key={job.id} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6 pb-2">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <img
                      src={job.logo}
                      alt={`${job.company} logo`}
                      className="w-10 h-10 rounded-md"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{job.title}</h3>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 mr-1">
                          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                        </svg>
                        {job.company}
                      </div>
                    </div>
                  </div>
                  <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${job.type === "Full-Time" ? "bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-300" : "bg-gray-50 text-gray-600 dark:bg-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700"}`}>
                    {job.type}
                  </span>
                </div>
              </div>
              <div className="px-6 pb-2">
                <div className="grid gap-2 text-sm">
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-2">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {job.location}
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-2">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                    {job.salary}
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    Posted {job.posted}
                  </div>
                  <p className="mt-2 text-gray-600 dark:text-gray-300 line-clamp-2">
                    {job.description}
                  </p>
                </div>
              </div>
              <div className="p-6 pt-2">
                <Link to={`/jobs/${job.id}`} className="w-full">
                  <button className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <div className="text-gray-500 dark:text-gray-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 mx-auto mb-4 opacity-50">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <h3 className="text-xl font-medium mb-2">No jobs found</h3>
              <p>Try adjusting your search or filters to find what you're looking for.</p>
            </div>
            <button 
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
              onClick={() => {
                setSearchQuery("");
                setJobType("all");
                setLocation("all");
                setCategory("all");
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default JobsPage;