// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// // Sample data for employer dashboard
// const postedJobs = [
//   {
//     id: 1,
//     title: "Frontend Developer",
//     location: "San Francisco, CA",
//     type: "Full-time",
//     applicants: 12,
//     views: 145,
//     posted: "2 days ago",
//     status: "active",
//   },
//   {
//     id: 2,
//     title: "UX Designer",
//     location: "Remote",
//     type: "Contract",
//     applicants: 8,
//     views: 98,
//     posted: "1 day ago",
//     status: "active",
//   },
//   {
//     id: 3,
//     title: "Product Manager",
//     location: "Austin, TX",
//     type: "Full-time",
//     applicants: 5,
//     views: 72,
//     posted: "3 days ago",
//     status: "active",
//   },
//   {
//     id: 4,
//     title: "Marketing Specialist",
//     location: "Remote",
//     type: "Part-time",
//     applicants: 0,
//     views: 23,
//     posted: "Just now",
//     status: "active",
//   },
// ];

// const recentApplicants = [
//   {
//     id: 1,
//     name: "Sarah Johnson",
//     position: "Frontend Developer",
//     applied: "2 hours ago",
//     status: "new",
//     resume: "#",
//   },
//   {
//     id: 2,
//     name: "Michael Chen",
//     position: "UX Designer",
//     applied: "1 day ago",
//     status: "reviewed",
//     resume: "#",
//   },
//   {
//     id: 3,
//     name: "Emily Rodriguez",
//     position: "Frontend Developer",
//     applied: "2 days ago",
//     status: "interviewed",
//     resume: "#",
//   },
//   {
//     id: 4,
//     name: "David Kim",
//     position: "Product Manager",
//     applied: "3 days ago",
//     status: "rejected",
//     resume: "#",
//   },
// ];

// function EmployerDashboard() {
//   const [activeTab, setActiveTab] = useState("jobs");

//   return (
//     <div className="container px-4 py-10 mx-auto">
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
//         <div>
//           <h1 className="text-3xl font-bold">Employer Dashboard</h1>
//           <p className="text-gray-500 dark:text-gray-400">Manage your job listings and applicants</p>
//         </div>
//         <Link to="/employer/post-job">
//           <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-primary-foreground hover:bg-blue-700 h-9 px-4 py-2">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
//               <line x1="12" y1="5" x2="12" y2="19"></line>
//               <line x1="5" y1="12" x2="19" y2="12"></line>
//             </svg>
//             Post a New Job
//           </button>
//         </Link>
//       </div>

//       {/* Stats Overview */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//         <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Active Jobs</p>
//               <h3 className="text-2xl font-bold mt-1">4</h3>
//             </div>
//             <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-600 dark:text-blue-400">
//                 <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
//                 <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
//               </svg>
//             </div>
//           </div>
//         </div>
//         <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Applicants</p>
//               <h3 className="text-2xl font-bold mt-1">25</h3>
//             </div>
//             <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-green-600 dark:text-green-400">
//                 <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
//                 <circle cx="9" cy="7" r="4"></circle>
//                 <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
//                 <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
//               </svg>
//             </div>
//           </div>
//         </div>
//         <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Job Views</p>
//               <h3 className="text-2xl font-bold mt-1">338</h3>
//             </div>
//             <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-purple-600 dark:text-purple-400">
//                 <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
//                 <circle cx="12" cy="12" r="3"></circle>
//               </svg>
//             </div>
//           </div>
//         </div>
//         <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Hired</p>
//               <h3 className="text-2xl font-bold mt-1">3</h3>
//             </div>
//             <div className="bg-amber-100 dark:bg-amber-900 p-3 rounded-full">
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-amber-600 dark:text-amber-400">
//                 <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
//                 <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
//               </svg>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Dashboard Content */}
//       <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
//         <div className="border-b border-gray-200 dark:border-gray-700">
//           <div className="flex">
//             <button
//               className={`px-4 py-3 text-sm font-medium ${
//                 activeTab === "jobs"
//                   ? "border-b-2 border-blue-600 text-blue-600"
//                   : "text-gray-500 hover:text-gray-700"
//               }`}
//               onClick={() => setActiveTab("jobs")}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 inline-block mr-1">
//                 <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
//                 <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
//               </svg>
//               Posted Jobs
//             </button>
//             <button
//               className={`px-4 py-3 text-sm font-medium ${
//                 activeTab === "applicants"
//                   ? "border-b-2 border-blue-600 text-blue-600"
//                   : "text-gray-500 hover:text-gray-700"
//               }`}
//               onClick={() => setActiveTab("applicants")}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 inline-block mr-1">
//                 <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
//                 <circle cx="9" cy="7" r="4"></circle>
//                 <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
//                 <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
//               </svg>
//               Recent Applicants
//             </button>
//             <button
//               className={`px-4 py-3 text-sm font-medium ${
//                 activeTab === "analytics"
//                   ? "border-b-2 border-blue-600 text-blue-600"
//                   : "text-gray-500 hover:text-gray-700"
//               }`}
//               onClick={() => setActiveTab("analytics")}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 inline-block mr-1">
//                 <rect x="2" y="2" width="6" height="20" rx="1"></rect>
//                 <rect x="9" y="9" width="6" height="13" rx="1"></rect>
//                 <rect x="16" y="6" width="6" height="16" rx="1"></rect>
//               </svg>
//               Analytics
//             </button>
//             <button
//               className={`px-4 py-3 text-sm font-medium ${
//                 activeTab === "settings"
//                   ? "border-b-2 border-blue-600 text-blue-600"
//                   : "text-gray-500 hover:text-gray-700"
//               }`}
//               onClick={() => setActiveTab("settings")}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 inline-block mr-1">
//                 <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
//                 <circle cx="12" cy="12" r="3"></circle>
//               </svg>
//               Account Settings
//             </button>
//           </div>
//         </div>

//         <div className="p-6">
//           {/* Posted Jobs Tab */}
//           {activeTab === "jobs" && (
//             <div>
//               <div className="mb-4">
//                 <h2 className="text-xl font-semibold">Your Job Listings</h2>
//                 <p className="text-gray-500 dark:text-gray-400">Manage and monitor your active job postings</p>
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead>
//                     <tr className="border-b">
//                       <th className="text-left py-3 px-4 font-medium">Job Title</th>
//                       <th className="text-left py-3 px-4 font-medium">Location</th>
//                       <th className="text-left py-3 px-4 font-medium">Type</th>
//                       <th className="text-left py-3 px-4 font-medium">Applicants</th>
//                       <th className="text-left py-3 px-4 font-medium">Views</th>
//                       <th className="text-left py-3 px-4 font-medium">Posted</th>
//                       <th className="text-left py-3 px-4 font-medium">Status</th>
//                       <th className="text-left py-3 px-4 font-medium">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {postedJobs.map((job) => (
//                       <tr key={job.id} className="border-b">
//                         <td className="py-3 px-4">
//                           <div className="font-medium">{job.title}</div>
//                         </td>
//                         <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
//                           <div className="flex items-center">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-1">
//                               <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
//                               <circle cx="12" cy="10" r="3"></circle>
//                             </svg>
//                             {job.location}
//                           </div>
//                         </td>
//                         <td className="py-3 px-4">
//                           <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${job.type === "Full-time" ? "bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-300" : "bg-gray-50 text-gray-600 dark:bg-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700"}`}>
//                             {job.type}
//                           </span>
//                         </td>
//                         <td className="py-3 px-4">{job.applicants}</td>
//                         <td className="py-3 px-4">{job.views}</td>
//                         <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
//                           <div className="flex items-center">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-1">
//                               <circle cx="12" cy="12" r="10"></circle>
//                               <polyline points="12 6 12 12 16 14"></polyline>
//                             </svg>
//                             {job.posted}
//                           </div>
//                         </td>
//                         <td className="py-3 px-4">
//                           <span className="inline-flex items-center rounded-md bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-2 py-1 text-xs font-medium">
//                             {job.status}
//                           </span>
//                         </td>
//                         <td className="py-3 px-4">
//                           <div className="flex gap-2">
//                             <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0">
//                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
//                                 <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
//                                 <circle cx="12" cy="12" r="3"></circle>
//                               </svg>
//                             </button>
//                             <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0">
//                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
//                                 <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
//                                 <circle cx="12" cy="12" r="3"></circle>
//                               </svg>
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           )}

//           {/* Recent Applicants Tab */}
//           {activeTab === "applicants" && (
//             <div>
//               <div className="mb-4">
//                 <h2 className="text-xl font-semibold">Recent Applicants</h2>
//                 <p className="text-gray-500 dark:text-gray-400">Review and manage job applications</p>
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead>
//                     <tr className="border-b">
//                       <th className="text-left py-3 px-4 font-medium">Applicant</th>
//                       <th className="text-left py-3 px-4 font-medium">Position</th>
//                       <th className="text-left py-3 px-4 font-medium">Applied</th>
//                       <th className="text-left py-3 px-4 font-medium">Status</th>
//                       <th className="text-left py-3 px-4 font-medium">Resume</th>
//                       <th className="text-left py-3 px-4 font-medium">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {recentApplicants.map((applicant) => (
//                       <tr key={applicant.id} className="border-b">
//                         <td className="py-3 px-4">
//                           <div className="font-medium">{applicant.name}</div>
//                         </td>
//                         <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{applicant.position}</td>
//                         <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
//                           <div className="flex items-center">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-1">
//                               <circle cx="12" cy="12" r="10"></circle>
//                               <polyline points="12 6 12 12 16 14"></polyline>
//                             </svg>
//                             {applicant.applied}
//                           </div>
//                         </td>
//                         <td className="py-3 px-4">
//                           <span
//                             className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${
//                               applicant.status === "new"
//                                 ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
//                                 : applicant.status === "reviewed"
//                                 ? "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300"
//                                 : applicant.status === "interviewed"
//                                 ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
//                                 : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
//                             }`}
//                           >
//                             {applicant.status.charAt(0).toUpperCase() + applicant.status.slice(1)}
//                           </span>
//                         </td>
//                         <td className="py-3 px-4">
//                           <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3 py-2">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-1">
//                               <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
//                               <polyline points="14 2 14 8 20 8"></polyline>
//                               <line x1="16" y1="13" x2="8" y2="13"></line>
//                               <line x1="16" y1="17" x2="8" y2="17"></line>
//                               <line x1="10" y1="9" x2="8" y2="9"></line>
//                             </svg>
//                             View
//                           </button>
//                         </td>
//                         <td className="py-3 px-4">
//                           <div className="flex gap-2">
//                             <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3 py-2">
//                               Message
//                             </button>
//                             <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3 py-2">
//                               Schedule
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           )}

//           {/* Analytics Tab */}
//           {activeTab === "analytics" && (
//             <div>
//               <div className="mb-4">
//                 <h2 className="text-xl font-semibold">Job Performance Analytics</h2>
//                 <p className="text-gray-500 dark:text-gray-400">Track the performance of your job listings</p>
//               </div>
//               <div className="h-[300px] flex items-center justify-center border rounded-md">
//                 <p className="text-gray-500 dark:text-gray-400">Analytics charts will be displayed here</p>
//               </div>
//             </div>
//           )}

//           {/* Account Settings Tab */}
//           {activeTab === "settings" && (
//             <div>
//               <div className="mb-4">
//                 <h2 className="text-xl font-semibold">Account Settings</h2>
//                 <p className="text-gray-500 dark:text-gray-400">Manage your company profile and preferences</p>
//               </div>
//               <form className="space-y-6">
//                 <div className="space-y-4">
//                   <h3 className="text-lg font-medium">Company Information</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <label htmlFor="company-name" className="text-sm font-medium">
//                         Company Name
//                       </label>
//                       <input
//                         id="company-name"
//                         defaultValue="TechCorp"
//                         className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-400"
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <label htmlFor="industry" className="text-sm font-medium">
//                         Industry
//                       </label>
//                       <input
//                         id="industry"
//                         defaultValue="Technology"
//                         className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-400"
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <label htmlFor="company-size" className="text-sm font-medium">
//                         Company Size
//                       </label>
//                       <select
//                         id="company-size"
//                         defaultValue="50-100"
//                         className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-400"
//                       >
//                         <option value="1-10">1-10 employees</option>
//                         <option value="11-50">11-50 employees</option>
//                         <option value="50-100">50-100 employees</option>
//                         <option value="101-500">101-500 employees</option>
//                         <option value="500+">500+ employees</option>
//                       </select>
//                     </div>
//                     <div className="space-y-2">
//                       <label htmlFor="location" className="text-sm font-medium">
//                         Location
//                       </label>
//                       <input
//                         id="location"
//                         defaultValue="San Francisco, CA"
//                         className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-400"
//                       />
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <label htmlFor="company-description" className="text-sm font-medium">
//                       Company Description
//                     </label>
//                     <textarea
//                       id="company-description"
//                       rows={4}
//                       defaultValue="TechCorp is a leading technology company specializing in innovative software solutions..."
//                       className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-400"
//                     />
//                   </div>
//                 </div>

//                 <div className="space-y-4">
//                   <h3 className="text-lg font-medium">Contact Information</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <label htmlFor="contact-email" className="text-sm font-medium">
//                         Email
//                       </label>
//                       <input
//                         id="contact-email"
//                         type="email"
//                         defaultValue="hr@techcorp.com"
//                         className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-400"
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <label htmlFor="contact-phone" className="text-sm font-medium">
//                         Phone
//                       </label>
//                       <input
//                         id="contact-phone"
//                         type="tel"
//                         defaultValue="(123) 456-7890"
//                         className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-400"
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <label htmlFor="website" className="text-sm font-medium">
//                         Website
//                       </label>
//                       <input
//                         id="website"
//                         type="url"
//                         defaultValue="https://techcorp.com"
//                         className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-400"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex justify-end">
//                   <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-primary-foreground hover:bg-blue-700 h-9 px-4 py-2">
//                     Save Changes
//                   </button>
//                 </div>
//               </form>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EmployerDashboard;



import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function EmployerDashboard() {
  const [activeTab, setActiveTab] = useState("jobs");
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState({
    totalJobs: 0,
    activeJobs: 0
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await fetch('http://localhost:4000/employer/dashboard', {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch dashboard data');
        }
        
        const data = await response.json();
        setJobs(data.jobs);
        setStats({
          totalJobs: data.totalJobs,
          activeJobs: data.activeJobs
        });
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="container px-4 py-10 mx-auto">
        <div className="flex justify-center items-center h-64">
          <p>Loading dashboard data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container px-4 py-10 mx-auto">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container px-4 py-10 mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Employer Dashboard</h1>
          <p className="text-gray-500 dark:text-gray-400">Manage your job listings</p>
        </div>
        <Link to="/employer/post-job">
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-primary-foreground hover:bg-blue-700 h-9 px-4 py-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Post a New Job
          </button>
        </Link>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Jobs</p>
              <h3 className="text-2xl font-bold mt-1">{stats.totalJobs}</h3>
            </div>
            <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-600 dark:text-blue-400">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Active Jobs</p>
              <h3 className="text-2xl font-bold mt-1">{stats.activeJobs}</h3>
            </div>
            <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-green-600 dark:text-green-400">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 2h5a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <div className="flex">
            <button
              className={`px-4 py-3 text-sm font-medium ${
                activeTab === "jobs"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("jobs")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 inline-block mr-1">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              Posted Jobs
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Posted Jobs Tab */}
          {activeTab === "jobs" && (
            <div>
              <div className="mb-4">
                <h2 className="text-xl font-semibold">Your Job Listings</h2>
                <p className="text-gray-500 dark:text-gray-400">Manage your active job postings</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium">Job Title</th>
                      <th className="text-left py-3 px-4 font-medium">Company</th>
                      <th className="text-left py-3 px-4 font-medium">Location</th>
                      <th className="text-left py-3 px-4 font-medium">Type</th>
                      <th className="text-left py-3 px-4 font-medium">Applicants</th>
                      <th className="text-left py-3 px-4 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobs.length > 0 ? (
                      jobs.map((job) => (
                        <tr key={job.jobId} className="border-b">
                          <td className="py-3 px-4">
                            <div className="font-medium">{job.jobTitle}</div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="text-gray-600 dark:text-gray-400">{job.companyName}</div>
                          </td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                            <div className="flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-1">
                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                              </svg>
                              {job.location}
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${
                              job.jobType === "Full-time" 
                                ? "bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-300" 
                                : "bg-gray-50 text-gray-600 dark:bg-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                            }`}>
                              {job.jobType}
                            </span>
                          </td>
                          <td className="py-3 px-4">{job.applicants}</td>
                          <td className="py-3 px-4">
                            <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${
                              job.status === "Active" 
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" 
                                : "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
                            }`}>
                              {job.status}
                            </span>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="py-4 text-center text-gray-500">
                          No jobs posted yet. Click "Post a New Job" to get started.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EmployerDashboard;