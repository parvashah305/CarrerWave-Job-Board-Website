import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LoginPage() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("candidate");
  
  const handleLogin = async (e) => {
    e.preventDefault();
    
    const email = document.getElementById(`${userType}-email`).value;
    const password = document.getElementById(`${userType}-password`).value;
  
    try {
      const response = await fetch("https://carrer-wave-backend.vercel.app/loginUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", 
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        toast.error(data.message) 
        return;
      }
  
      else{
        toast.success("Login Successful!"
         );
        setTimeout(()=>{
           
            window.location.reload()
        },4000)
      }
  
      // Navigate user based on their type
      if (userType === "employer") {
        navigate("/employer/dashboard");
      } else {
        navigate("/candidate/dashboard");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Please try again.");
    }
  };
  
  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-4rem)] py-10 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="p-6 text-center">
          <h2 className="text-2xl font-bold">Welcome Back</h2>
          <p className="text-gray-500 dark:text-gray-400">Sign in to your CareerWave account</p>
        </div>
        <div className="p-6">
          <div className="mb-6">
            <div className="flex rounded-md border border-gray-200 dark:border-gray-700 p-1">
              <button
                className={`flex-1 items-center gap-2 rounded-sm px-3 py-2 text-sm font-medium ${
                  userType === "candidate"
                    ? "bg-blue-600 text-white"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setUserType("candidate")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 inline-block mr-1">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                Job Seeker
              </button>
              <button
                className={`flex-1 items-center gap-2 rounded-sm px-3 py-2 text-sm font-medium ${
                  userType === "employer"
                    ? "bg-blue-600 text-white"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setUserType("employer")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 inline-block mr-1">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
                Employer
              </button>
            </div>
          </div>
          
          {userType === "candidate" ? (
            <form onSubmit={handleLogin}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="candidate-email" className="text-sm font-medium">Email</label>
                  <input
                    id="candidate-email"
                    type="email"
                    placeholder="john.doe@example.com"
                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-400"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="candidate-password" className="text-sm font-medium">Password</label>
                    <Link to="/forgot-password" className="text-xs text-blue-600 hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <input
                    id="candidate-password"
                    type="password"
                    placeholder="••••••••"
                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-400"
                    required
                  />
                </div>
                <button type="submit" className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-primary-foreground hover:bg-blue-700 h-9 px-4 py-2">
                  Sign In as Job Seeker
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleLogin}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="employer-email" className="text-sm font-medium">Email</label>
                  <input
                    id="employer-email"
                    type="email"
                    placeholder="company@example.com"
                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-400"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="employer-password" className="text-sm font-medium">Password</label>
                    <Link to="/forgot-password" className="text-xs text-blue-600 hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <input
                    id="employer-password"
                    type="password"
                    placeholder="••••••••"
                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-400"
                    required
                  />
                </div>
                <button type="submit" className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-primary-foreground hover:bg-blue-700 h-9 px-4 py-2">
                  Sign In as Employer
                </button>
              </div>
            </form>
          )}
          
        </div>
        <div className="p-6 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;