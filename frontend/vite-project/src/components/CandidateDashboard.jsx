// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// // Sample data for candidate dashboard
// const appliedJobs = [
//   {
//     id: 1,
//     title: "Frontend Developer",
//     company: "TechCorp",
//     location: "San Francisco, CA",
//     type: "Full-time",
//     applied: "2 days ago",
//     status: "under review",
//   },
//   {
//     id: 2,
//     title: "UX Designer",
//     company: "DesignHub",
//     location: "Remote",
//     type: "Contract",
//     applied: "1 week ago",
//     status: "interview scheduled",
//   },
//   {
//     id: 3,
//     title: "Product Manager",
//     company: "InnovateTech",
//     location: "Austin, TX",
//     type: "Full-time",
//     applied: "2 weeks ago",
//     status: "rejected",
//   },
// ];

// const savedJobs = [
//   {
//     id: 4,
//     title: "DevOps Engineer",
//     company: "CloudSystems",
//     location: "New York, NY",
//     type: "Full-time",
//     salary: "$110,000 - $140,000",
//     posted: "3 days ago",
//   },
//   {
//     id: 5,
//     title: "Data Scientist",
//     company: "DataInsights",
//     location: "Chicago, IL",
//     type: "Full-time",
//     salary: "$115,000 - $145,000",
//     posted: "1 week ago",
//   },
// ];

// function CandidateDashboard() {
//   const [activeTab, setActiveTab] = useState("applications");

//   return (
//     <div className="container px-4 py-10 mx-auto">
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
//         <div>
//           <h1 className="text-3xl font-bold">Candidate Dashboard</h1>
//           <p className="text-gray-500 dark:text-gray-400">Manage your job applications and profile</p>
//         </div>
//         <Link to="/jobs">
//           <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-primary-foreground hover:bg-blue-700 h-9 px-4 py-2">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
//               <circle cx="11" cy="11" r="8"></circle>
//               <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
//             </svg>
//             Find Jobs
//           </button>
//         </Link>
//       </div>

//       {/* Stats Overview */}
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
//         <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Applied Jobs</p>
//               <h3 className="text-2xl font-bold mt-1">3</h3>
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
//               <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Saved Jobs</p>
//               <h3 className="text-2xl font-bold mt-1">2</h3>
//             </div>
//             <div className="bg-red-100 dark:bg-red-900 p-3 rounded-full">
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-red-600 dark:text-red-400">
//                 <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
//               </svg>
//             </div>
//           </div>
//         </div>
//         <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Profile Views</p>
//               <h3 className="text-2xl font-bold mt-1">24</h3>
//             </div>
//             <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-green-600 dark:text-green-400">
//                 <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
//                 <circle cx="12" cy="7" r="4"></circle>
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
//                 activeTab === "applications"
//                   ? "border-b-2 border-blue-600 text-blue-600"
//                   : "text-gray-500 hover:text-gray-700"
//               }`}
//               onClick={() => setActiveTab("applications")}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 inline-block mr-1">
//                 <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
//                 <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
//               </svg>
//               Applications
//             </button>
//             <button
//               className={`px-4 py-3 text-sm font-medium ${
//                 activeTab === "saved"
//                   ? "border-b-2 border-blue-600 text-blue-600"
//                   : "text-gray-500 hover:text-gray-700"
//               }`}
//               onClick={() => setActiveTab("saved")}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 inline-block mr-1">
//                 <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
//               </svg>
//               Saved Jobs
//             </button>
//             <button
//               className={`px-4 py-3 text-sm font-medium ${
//                 activeTab === "profile"
//                   ? "border-b-2 border-blue-600 text-blue-600"
//                   : "text-gray-500 hover:text-gray-700"
//               }`}
//               onClick={() => setActiveTab("profile")}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 inline-block mr-1">
//                 <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
//                 <circle cx="12" cy="7" r="4"></circle>
//               </svg>
//               Profile
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
//               Settings
//             </button>
//           </div>
//         </div>

//         <div className="p-6">
//           {/* Applications Tab */}
//           {activeTab === "applications" && (
//             <div>
//               <div className="mb-4">
//                 <h2 className="text-xl font-semibold">Your Job Applications</h2>
//                 <p className="text-gray-500 dark:text-gray-400">Track the status of your job applications</p>
//               </div>
//               {appliedJobs.length > 0 ? (
//                 <div className="overflow-x-auto">
//                   <table className="w-full">
//                     <thead>
//                       <tr className="border-b">
//                         <th className="text-left py-3 px-4 font-medium">Job</th>
//                         <th className="text-left py-3 px-4 font-medium">Company</th>
//                         <th className="text-left py-3 px-4 font-medium">Applied</th>
//                         <th className="text-left py-3 px-4 font-medium">Status</th>
//                         <th className="text-left py-3 px-4 font-medium">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {appliedJobs.map((job) => (
//                         <tr key={job.id} className="border-b">
//                           <td className="py-3 px-4">
//                             <div className="font-medium">{job.title}</div>
//                             <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
//                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 mr-1">
//                                 <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
//                                 <circle cx="12" cy="10" r="3"></circle>
//                               </svg>
//                               {job.location}
//                             </div>
//                           </td>
//                           <td className="py-3 px-4">
//                             <div className="flex items-center">
//                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-2 text-gray-500">
//                                 <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
//                                 <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
//                               </svg>
//                               {job.company}
//                             </div>
//                           </td>
//                           <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
//                             <div className="flex items-center">
//                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-1">
//                                 <circle cx="12" cy="12" r="10"></circle>
//                                 <polyline points="12 6 12 12 16 14"></polyline>
//                               </svg>
//                               {job.applied}
//                             </div>
//                           </td>
//                           <td className="py-3 px-4">
//                             <span
//                               className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${
//                                 job.status === "under review"
//                                   ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
//                                   : job.status === "interview scheduled"
//                                   ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
//                                   : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
//                               }`}
//                             >
//                               {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
//                             </span>
//                           </td>
//                           <td className="py-3 px-4">
//                             <div className="flex gap-2">
//                               <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3 py-2">
//                                 View
//                               </button>
//                               <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3 py-2">
//                                 Withdraw
//                               </button>
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               ) : (
//                 <div className="text-center py-12">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 mx-auto mb-4 text-gray-400">
//                     <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
//                     <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
//                   </svg>
//                   <h3 className="text-lg font-medium mb-2">No applications yet</h3>
//                   <p className="text-gray-500 dark:text-gray-400 mb-4">
//                     You haven't applied to any jobs yet. Start your job search now!
//                   </p>
//                   <Link to="/jobs">
//                     <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-primary-foreground hover:bg-blue-700 h-9 px-4 py-2">
//                       Browse Jobs
//                     </button>
//                   </Link>
//                 </div>
//               )}
//             </div>
//           )}

//           {/* Saved Jobs Tab */}
//           {activeTab === "saved" && (
//             <div>
//               <div className="mb-4">
//                 <h2 className="text-xl font-semibold">Saved Jobs</h2>
//                 <p className="text-gray-500 dark:text-gray-400">Jobs you've saved for later</p>
//               </div>
//               {savedJobs.length > 0 ? (
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {savedJobs.map((job) => (
//                     <div key={job.id} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow">
//                       <div className="p-4">
//                         <div className="flex justify-between items-start">
//                           <div>
//                             <h3 className="font-semibold">{job.title}</h3>
//                             <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mt-1">
//                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 mr-1">
//                                 <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
//                                 <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
//                               </svg>
//                               {job.company}
//                             </div>
//                             <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mt-1">
//                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 mr-1">
//                                 <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
//                                 <circle cx="12" cy="10" r="3"></circle>
//                               </svg>
//                               {job.location}
//                             </div>
//                             <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mt-1">
//                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 mr-1">
//                                 <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
//                                 <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
//                               </svg>
//                               {job.salary}
//                             </div>
//                             <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mt-1">
//                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 mr-1">
//                                 <circle cx="12" cy="12" r="10"></circle>
//                                 <polyline points="12 6 12 12 16 14"></polyline>
//                               </svg>
//                               Posted {job.posted}
//                             </div>
//                           </div>
//                           <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${job.type === "Full-time" ? "bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-300" : "bg-gray-50 text-gray-600 dark:bg-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700"}`}>
//                             {job.type}
//                           </span>
//                         </div>
//                         <div className="flex gap-2 mt-4">
//                           <Link to={`/jobs/${job.id}`} className="flex-1">
//                             <button className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
//                               View Job
//                             </button>
//                           </Link>
//                           <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
//                               <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
//                             </svg>
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <div className="text-center py-12">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 mx-auto mb-4 text-gray-400">
//                     <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
//                   </svg>
//                   <h3 className="text-lg font-medium mb-2">No saved jobs</h3>
//                   <p className="text-gray-500 dark:text-gray-400 mb-4">
//                     You haven't saved any jobs yet. Save jobs to apply to them later.
//                   </p>
//                   <Link to="/jobs">
//                     <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-primary-foreground hover:bg-blue-700 h-9 px-4 py-2">
//                       Browse Jobs
//                     </button>
//                   </Link>
//                 </div>
//               )}
//             </div>
//           )}

//           {/* Profile Tab */}
//           {activeTab === "profile" && (
//             <div>
//               <div className="mb-4">
//                 <h2 className="text-xl font-semibold">Your Profile</h2>
//                 <p className="text-gray-500 dark:text-gray-400">Manage your personal information and resume</p>
//               </div>
//               <form className="space-y-6">
//                 <div className="flex flex-col md:flex-row gap-6">
//                   <div className="md:w-1/4">
//                     <div className="aspect-square rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 text-gray-500">
//                         <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
//                         <circle cx="12" cy="7" r="4"></circle>
//                       </svg>
//                     </div>
//                     <div className="mt-4">
//                       <button className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
//                         Upload Photo
//                       </button>
//                     </div>
//                   </div>
//                   <div className="md:w-3/4 space-y-4">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div className="space-y-2">
//                         <label htmlFor="first-name" className="text-sm font-medium">
//                           First Name
//                         </label>
//                         <input
//                           id="first-name"
//                           defaultValue="John"
//                           className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-400"
//                         />
//                       </div>
//                       <div className="space-y-2">
//                         <label htmlFor="last-name" className="text-sm font-medium">
//                           Last Name
//                         </label>
//                         <input
//                           id="last-name"
//                           defaultValue="Doe"
//                           className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-400"
//                         />
//                       </div>
//                       <div className="space-y-2">
//                         <label htmlFor="email" className="text-sm font-medium">
//                           Email
//                         </label>
//                         <input
//                           id="email"
//                           type="email"
//                           defaultValue="john.doe@example.com"
//                           className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-400"
//                         />
//                       </div>
//                       <div className="space-y-2">
//                         <label htmlFor="phone" className="text-sm font-medium">
//                           Phone
//                         </label>
//                         <input
//                           id="phone"
//                           type="tel"
//                           defaultValue="(123) 456-7890"
//                           className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-400"
//                         />
//                       </div>
//                       <div className="space-y-2">
//                         <label htmlFor="location" className="text-sm font-medium">
//                           Location
//                         </label>
//                         <input
//                           id="location"
//                           defaultValue="San Francisco, CA"
//                           className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-400"
//                         />
//                       </div>
//                       <div className="space-y-2">
//                         <label htmlFor="job-title" className="text-sm font-medium">
//                           Current Job Title
//                         </label>
//                         <input
//                           id="job-title"
//                           defaultValue="Frontend Developer"
//                           className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-400"
//                         />
//                       </div>
//                     </div>

//                     <div className="space-y-2">
//                       <label htmlFor="bio" className="text-sm font-medium">
//                         Professional Summary
//                       </label>
//                       <textarea
//                         id="bio"
//                         rows={4}
//                         defaultValue="Experienced Frontend Developer with 5 years of experience building responsive web applications..."
//                         className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-400"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="space-y-4">
//                   <h3 className="text-lg font-medium">Resume</h3>
//                   <div className="border rounded-md p-4 flex items-center justify-between">
//                     <div className="flex items-center">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-blue-600 mr-3">
//                         <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
//                         <polyline points="14 2 14 8 20 8"></polyline>
//                         <line x1="16" y1="13" x2="8" y2="13"></line>
//                         <line x1="16" y1="17" x2="8" y2="17"></line>
//                         <line x1="10" y1="9" x2="8" y2="9"></line>
//                       </svg>
//                       <div>
//                         <p className="font-medium">John_Doe_Resume.pdf</p>
//                         <p className="text-sm text-gray-500">Uploaded 2 weeks ago</p>
//                       </div>
//                     </div>
//                     <div className="flex gap-2">
//                       <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3 py-2">
//                         View
//                       </button>
//                       <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3 py-2">
//                         Replace
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="space-y-4">
//                   <h3 className="text-lg font-medium">Skills</h3>
//                   <div className="flex flex-wrap gap-2">
//                     <span className="inline-flex items-center rounded-md bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-2 py-1 text-xs font-medium">
//                       JavaScript
//                     </span>
//                     <span className="inline-flex items-center rounded-md bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-2 py-1 text-xs font-medium">
//                       React
//                     </span>
//                     <span className="inline-flex items-center rounded-md bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-2 py-1 text-xs font-medium">
//                       TypeScript
//                     </span>
//                     <span className="inline-flex items-center rounded-md bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-2 py-1 text-xs font-medium">
//                       HTML/CSS
//                     </span>
//                     <span className="inline-flex items-center rounded-md bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-2 py-1 text-xs font-medium">
//                       Node.js
//                     </span>
//                     <button className="inline-flex items-center justify-center rounded-md text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-6 px-2 py-1">
//                       + Add Skill
//                     </button>
//                   </div>
//                 </div>

//                 <div className="flex justify-end">
//                   <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-primary-foreground hover:bg-blue-700 h-9 px-4 py-2">
//                     Save Profile
//                   </button>
//                 </div>
//               </form>
//             </div>
//           )}

//           {/* Settings Tab */}
//           {activeTab === "settings" && (
//             <div>
//               <div className="mb-4">
//                 <h2 className="text-xl font-semibold">Account Settings</h2>
//                 <p className="text-gray-500 dark:text-gray-400">Manage your account preferences and notifications</p>
//               </div>
//               <div className="space-y-6">
//                 <div className="space-y-4">
//                   <h3 className="text-lg font-medium">Email Notifications</h3>
//                   <div className="space-y-2">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="font-medium">Job Recommendations</p>
//                         <p className="text-sm text-gray-500">Receive personalized job recommendations</p>
//                       </div>
//                       <label className="relative inline-flex items-center cursor-pointer">
//                         <input type="checkbox" defaultChecked className="sr-only peer" />
//                         <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
//                       </label>
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="font-medium">Application Updates</p>
//                         <p className="text-sm text-gray-500">Receive updates on your job applications</p>
//                       </div>
//                       <label className="relative inline-flex items-center cursor-pointer">
//                         <input type="checkbox" defaultChecked className="sr-only peer" />
//                         <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
//                       </label>
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="font-medium">Job Alerts</p>
//                         <p className="text-sm text-gray-500">Receive alerts for new job postings</p>
//                       </div>
//                       <label className="relative inline-flex items-center cursor-pointer">
//                         <input type="checkbox" defaultChecked className="sr-only peer" />
//                         <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
//                       </label>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="space-y-4">
//                   <h3 className="text-lg font-medium">Privacy Settings</h3>
//                   <div className="space-y-2">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="font-medium">Profile Visibility</p>
//                         <p className="text-sm text-gray-500">Make your profile visible to employers</p>
//                       </div>
//                       <label className="relative inline-flex items-center cursor-pointer">
//                         <input type="checkbox" defaultChecked className="sr-only peer" />
//                         <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
//                       </label>
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="font-medium">Resume Visibility</p>
//                         <p className="text-sm text-gray-500">Allow employers to download your resume</p>
//                       </div>
//                       <label className="relative inline-flex items-center cursor-pointer">
//                         <input type="checkbox" defaultChecked className="sr-only peer" />
//                         <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
//                       </label>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="space-y-4">
//                   <h3 className="text-lg font-medium">Account Security</h3>
//                   <div className="space-y-4">
//                     <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
//                       Change Password
//                     </button>
//                     <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
//                       Enable Two-Factor Authentication
//                     </button>
//                   </div>
//                 </div>

//                 <div className="pt-4 border-t">
//                   <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-red-600 text-white hover:bg-red-700 h-9 px-4 py-2">
//                     Delete Account
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CandidateDashboard;





import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CandidateDashboard() {
  const [activeTab, setActiveTab] = useState("applications");
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState({
    totalAppliedJobs: 0,
    activeApplications: 0
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await fetch('http://localhost:4000/candidate/dashboard', {
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
        
        // Ensure appliedJobs is always an array
        const jobs = Array.isArray(data.appliedJobs) ? data.appliedJobs : [];
        const totalJobs = Number(data.totalAppliedJobs) || 0;
        
        setAppliedJobs(jobs);
        setStats({
          totalAppliedJobs: totalJobs,
          activeApplications: jobs.filter(job => job?.status !== "rejected").length
        });
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setAppliedJobs([]);
        setStats({
          totalAppliedJobs: 0,
          activeApplications: 0
        });
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // Safe calculation of active applications
  const activeApplicationsCount = Array.isArray(appliedJobs) 
    ? appliedJobs.filter(job => job?.status !== "rejected").length 
    : 0;

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
          <h1 className="text-3xl font-bold">Candidate Dashboard</h1>
          <p className="text-gray-500 dark:text-gray-400">Track your job applications</p>
        </div>
        <Link to="/jobs">
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-primary-foreground hover:bg-blue-700 h-9 px-4 py-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            Find Jobs
          </button>
        </Link>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Applied Jobs</p>
              <h3 className="text-2xl font-bold mt-1">{stats.totalAppliedJobs}</h3>
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
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Active Applications</p>
              <h3 className="text-2xl font-bold mt-1">
                {activeApplicationsCount}
              </h3>
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
                activeTab === "applications"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("applications")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 inline-block mr-1">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              Applications
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Applications Tab */}
          {activeTab === "applications" && (
            <div>
              <div className="mb-4">
                <h2 className="text-xl font-semibold">Your Job Applications</h2>
                <p className="text-gray-500 dark:text-gray-400">Track the status of your job applications</p>
              </div>
              {appliedJobs?.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium">Job</th>
                        <th className="text-left py-3 px-4 font-medium">Company</th>
                        <th className="text-left py-3 px-4 font-medium">Location</th>
                        <th className="text-left py-3 px-4 font-medium">Type</th>
                        <th className="text-left py-3 px-4 font-medium">Applied</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appliedJobs.map((job) => (
                        <tr key={job?._id || Math.random()} className="border-b">
                          <td className="py-3 px-4">
                            <div className="font-medium">{job?.jobTitle || "N/A"}</div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="text-gray-600 dark:text-gray-400">{job?.companyName || "N/A"}</div>
                          </td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                            <div className="flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-1">
                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                              </svg>
                              {job?.location || "N/A"}
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${
                              job?.jobType === "Full-time" 
                                ? "bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-300" 
                                : "bg-gray-50 text-gray-600 dark:bg-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                            }`}>
                              {job?.jobType || "N/A"}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                            <div className="flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-1">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                              </svg>
                              {job?.appliedAt ? new Date(job.appliedAt).toLocaleDateString() : "N/A"}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-12">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 mx-auto mb-4 text-gray-400">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                  <h3 className="text-lg font-medium mb-2">No applications yet</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    You haven't applied to any jobs yet. Start your job search now!
                  </p>
                  <Link to="/jobs">
                    <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-primary-foreground hover:bg-blue-700 h-9 px-4 py-2">
                      Browse Jobs
                    </button>
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CandidateDashboard;