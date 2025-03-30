import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("candidate");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Validate required fields
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 8) newErrors.password = "Password must be at least 8 characters";
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    
    if (userType === "employer" && !formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions";
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  
    const userData = {
      fname: formData.firstName,
      lname: formData.lastName,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
      role: userType,
      company: userType === "employer" ? formData.companyName : undefined,
    };
  
    try {
      const response = await fetch("http://localhost:4000/registerUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }
  
      alert("User Registered Successfully!");
      navigate(userType === "employer" ? "/employer/dashboard" : "/candidate/dashboard");
    } catch (error) {
      console.error("Registration failed:", error);
      alert(error.message);
    }
  };

  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-4rem)] py-10 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="p-6">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">Create an Account</h1>
            <p className="text-gray-500 dark:text-gray-400">Join CareerWave to find your dream job or hire top talent</p>
          </div>
          
          <div className="flex border border-gray-200 dark:border-gray-700 rounded-md mb-6">
            <button
              type="button"
              className={`flex-1 px-4 py-2 text-sm font-medium rounded-l-md ${
                userType === "candidate"
                  ? "bg-blue-600 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setUserType("candidate")}
            >
              <div className="flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                Job Seeker
              </div>
            </button>
            <button
              type="button"
              className={`flex-1 px-4 py-2 text-sm font-medium rounded-r-md ${
                userType === "employer"
                  ? "bg-blue-600 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setUserType("employer")}
            >
              <div className="flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
                Employer
              </div>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full rounded-md border ${
                    errors.firstName ? "border-red-500" : "border-gray-300 dark:border-gray-700"
                  } bg-white px-3 py-2 text-sm placeholder:text-gray-500 dark:bg-gray-950 dark:placeholder:text-gray-400`}
                  placeholder="John"
                />
                {errors.firstName && (
                  <p className="text-xs text-red-500">{errors.firstName}</p>
                )}
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full rounded-md border ${
                    errors.lastName ? "border-red-500" : "border-gray-300 dark:border-gray-700"
                  } bg-white px-3 py-2 text-sm placeholder:text-gray-500 dark:bg-gray-950 dark:placeholder:text-gray-400`}
                  placeholder="Doe"
                />
                {errors.lastName && (
                  <p className="text-xs text-red-500">{errors.lastName}</p>
                )}
              </div>
            </div>

            {userType === "employer" && (
              <div className="space-y-2">
                <label htmlFor="companyName" className="text-sm font-medium">
                  Company Name
                </label>
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  value={formData.companyName}
                  onChange={handleChange}
                  className={`w-full rounded-md border ${
                    errors.companyName ? "border-red-500" : "border-gray-300 dark:border-gray-700"
                  } bg-white px-3 py-2 text-sm placeholder:text-gray-500 dark:bg-gray-950 dark:placeholder:text-gray-400`}
                  placeholder="Company Inc."
                />
                {errors.companyName && (
                  <p className="text-xs text-red-500">{errors.companyName}</p>
                )}
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full rounded-md border ${
                  errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-700"
                } bg-white px-3 py-2 text-sm placeholder:text-gray-500 dark:bg-gray-950 dark:placeholder:text-gray-400`}
                placeholder="john.doe@example.com"
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full rounded-md border ${
                  errors.password ? "border-red-500" : "border-gray-300 dark:border-gray-700"
                } bg-white px-3 py-2 text-sm placeholder:text-gray-500 dark:bg-gray-950 dark:placeholder:text-gray-400`}
                placeholder="••••••••"
              />
              {errors.password && (
                <p className="text-xs text-red-500">{errors.password}</p>
              )}
              <p className="text-xs text-gray-500">
                Password must be at least 8 characters long
              </p>
            </div>

            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="text-sm font-medium">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full rounded-md border ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300 dark:border-gray-700"
                } bg-white px-3 py-2 text-sm placeholder:text-gray-500 dark:bg-gray-950 dark:placeholder:text-gray-400`}
                placeholder="••••••••"
              />
              {errors.confirmPassword && (
                <p className="text-xs text-red-500">{errors.confirmPassword}</p>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  id="agreeToTerms"
                  name="agreeToTerms"
                  type="checkbox"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                />
                <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-gray-600 dark:text-gray-400">
                  I agree to the{" "}
                  <a href="/terms" className="text-blue-600 hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="/privacy" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </a>
                </label>
              </div>
              {errors.agreeToTerms && (
                <p className="text-xs text-red-500">{errors.agreeToTerms}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-primary-foreground hover:bg-blue-700 h-10 px-4 py-2"
            >
              Create Account
            </button>
          </form>


          <div className="mt-6 text-center text-sm">
            <p className="text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;