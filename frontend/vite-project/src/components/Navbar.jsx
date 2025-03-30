import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("http://localhost:4000/check-auth", {
          method: "GET",
          credentials: "include", 
        });
        const data = await response.json();
        if (response.ok && data.isAuthenticated) {
          setIsAuthenticated(true);
          setUser(data.user);
        } else {
          setIsAuthenticated(false);
          setUser(null);
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        setIsAuthenticated(false);
        setUser(null);
      }
    };

    checkAuth();
  }, []);


  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:4000/logout", {
        method: "POST",
        credentials: "include", 
      });
      if (response.ok) {
        setIsAuthenticated(false);
        toast.success("Logout Successfully")
        setUser(null);
        navigate("/");
      }
      else{
        toast.error("Unable to Logout")
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };


  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/jobs?q=${searchQuery}`);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md dark:bg-gray-950/80 dark:border-gray-800">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo and Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <button
            className="lg:hidden mr-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <path d="M18 6 6 18"></path>
                <path d="M6 6l12 12"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
            <span className="sr-only">Toggle menu</span>
          </button>
          <Link to="/" className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6 text-blue-600">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="8" x2="16" y2="16"></line>
              <line x1="8" y1="16" x2="16" y2="16"></line>
            </svg>
            <span className="text-xl font-bold hidden sm:inline-block">CareerWave</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/jobs"
            className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400"
          >
            Browse Jobs
          </Link>
          <Link
            to="/employer/post-job"
            className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400"
          >
            Post a Job
          </Link>
        </div>

        {/* Search and Auth */}
        <div className="flex items-center gap-4">
          <form
            className="hidden md:flex relative"
            onSubmit={handleSearch}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="search"
              placeholder="Search jobs..."
              className="w-[200px] lg:w-[300px] pl-9 h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>

          {isAuthenticated ? (
            <>
              <span className="text-sm font-medium">Hello, {user?.name || "User"}</span>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-4 py-3 space-y-2 border-t bg-white dark:bg-gray-950 dark:border-gray-800">
          <Link
            to="/jobs"
            className="block text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Browse Jobs
          </Link>
          <Link
            to="/employer/post-job"
            className="block text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Post a Job
          </Link>
          {isAuthenticated ? (
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleLogout();
              }}
              className="block text-sm font-medium text-red-600 hover:text-red-700"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="block text-sm font-medium text-blue-600 hover:text-blue-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
          )}
        </div>
      )}
    </header>
  );
}

export default Navbar;
