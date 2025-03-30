import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import JobsPage from './components/JobsPage';
import JobDetailPage from './components/JobDetailPage';
import EmployerDashboard from './components/EmployerDashboard';
import CandidateDashboard from './components/CandidateDashboard';
import PostJobPage from './components/PostJobPage';
import LoginPage from './components/LoginPage';
import SignUp from './components/Signup';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Router>
      <ToastContainer/>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 dark:from-blue-900 dark:to-blue-950">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/jobs/:id" element={<JobDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/employer/dashboard" element={<EmployerDashboard />} />
          <Route path="/candidate/dashboard" element={<CandidateDashboard />} />
          <Route path="/employer/post-job" element={<PostJobPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;