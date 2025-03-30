import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [featuredJobs, setFeaturedJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedJobs = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://carrer-wave-backend.vercel.app/get-job", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }

        const data = await response.json();
        
        // Transform and sort jobs by date (newest first)
        const jobs = Array.isArray(data) 
          ? data 
          : data.jobs || data.data?.jobs || [];
        
        const sortedJobs = jobs
          .map(job => ({
            id: job._id,
            title: job.jobTitle,
            company: job.companyName,
            location: job.location,
            type: job.jobType,
            salary: job.salaryMin 
              ? `$${job.salaryMin.toLocaleString()} - $${job.salaryMax.toLocaleString()}`
              : "Salary not specified",
            posted: new Date(job.createdAt),
            logo: "https://via.placeholder.com/40",
          }))
          .sort((a, b) => b.posted - a.posted) // Sort by newest first
          .slice(0, 5); // Get top 5 most recent

        setFeaturedJobs(sortedJobs);
        setError(null);
      } catch (err) {
        console.error("Error fetching featured jobs:", err);
        setError("Failed to load featured jobs");
        // Fallback to sample data if API fails
        setFeaturedJobs([
          {
            id: 1,
            title: "Frontend Developer",
            company: "TechCorp",
            location: "San Francisco, CA",
            type: "Full-time",
            salary: "$90,000 - $120,000",
            posted: new Date(),
            logo: "https://via.placeholder.com/40",
          },
          // ... other fallback jobs
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedJobs();
  }, []);

  // Helper function to format posted date
  const formatPostedDate = (date) => {
    if (!date) return "Recently";
    const now = new Date();
    const diffTime = now - date;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays/7)} weeks ago`;
    return "Over a month ago";
  };

  if (loading) {
    return (
      <div className="container px-4 py-10 mx-auto text-center">
        <p>Loading featured jobs...</p>
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
    <div className="container px-4 py-10 md:py-16 mx-auto">
      {/* ... (keep all your existing sections) ... */}

      <section className="py-12 md:py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
           Find Your Dream Job Today
       </h1>
         <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
           Connect with top employers and discover opportunities that match your skills and aspirations.
         </p>
         <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
           <Link to="/jobs">
             <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-primary-foreground hover:bg-blue-700 h-10 px-4 py-2 text-base">
               Browse Jobs
             </button>
           </Link>
           <Link to="/employer/post-job">
             <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-base">
               Post a Job
            </button>
           </Link>
         </div>
        
         {/* Search Bar (Mobile) */}
        <div className="md:hidden mb-8">
           <form 
            className="flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const query = formData.get('query');
              window.location.href = `/jobs?q=${query}`;
            }}
          >
            <div className="relative flex-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-3 h-4 w-4 text-gray-500">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                name="query"
                className="w-full rounded-md border border-gray-300 bg-white px-9 py-2 text-sm placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-400"
                placeholder="Search jobs..."
                type="search"
              />
            </div>
            <button 
              type="submit" 
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-primary-foreground hover:bg-blue-700 h-9 px-4 py-2"
            >
              Search
            </button>
          </form>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <p className="text-3xl font-bold text-blue-600">5,000+</p>
            <p className="text-gray-600 dark:text-gray-300">Active Jobs</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <p className="text-3xl font-bold text-blue-600">2,500+</p>
            <p className="text-gray-600 dark:text-gray-300">Companies</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <p className="text-3xl font-bold text-blue-600">10M+</p>
            <p className="text-gray-600 dark:text-gray-300">Job Seekers</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <p className="text-3xl font-bold text-blue-600">98%</p>
            <p className="text-gray-600 dark:text-gray-300">Success Rate</p>
          </div>
        </div>
      </section>
      
      {/* Featured Jobs Section - Updated to use fetched jobs */}
      <section className="py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Recently Posted Jobs</h2>
          <Link to="/jobs" className="text-blue-600 hover:underline">
            View all jobs
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredJobs.map((job) => (
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
                  <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${job.type === "Full-time" ? "bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-300" : "bg-gray-50 text-gray-600 dark:bg-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700"}`}>
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
                    Posted {formatPostedDate(job.posted)}
                  </div>
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
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 bg-white dark:bg-gray-800 rounded-xl p-8 my-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">How CareerWave Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-blue-600 dark:text-blue-400">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Search Jobs</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Browse through thousands of job listings tailored to your skills and preferences.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-blue-600 dark:text-blue-400">
                <path d="M21 8v13H3V8"></path>
                <path d="M1 3h22v5H1z"></path>
                <path d="M10 12h4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Apply Online</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Submit your application with just a few clicks and track your application status.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-blue-600 dark:text-blue-400">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Get Hired</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Connect with employers, schedule interviews, and land your dream job.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Take the Next Step in Your Career?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have found their dream jobs through CareerWave.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-white text-blue-700 hover:bg-gray-100 h-10 px-4 py-2 text-base">
                Create an Account
              </button>
            </Link>
            <Link to="/employer/post-job">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-transparent border border-white text-white hover:bg-white hover:text-blue-700 h-10 px-4 py-2 text-base">
                Post a Job
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;