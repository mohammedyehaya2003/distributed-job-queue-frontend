import { useEffect, useState } from "react";
import { getJobs } from "../services/jobService";
import { getStats } from "../services/statsService";
import "./DashboardPage.css";
import Navbar from "../components/Navbar";

function DashboardPage() {
  const [jobs, setJobs] = useState([]);

  const [stats, setStats] = useState({
    pending: 0,
    processing: 0,
    completed: 0,
    failed: 0,
  });

  useEffect(() => {
    const fetchJobs = async () => {
      const data = await getJobs();
      setJobs(data.jobs);

      const statsData = await getStats();
      setStats(statsData);
    };

    fetchJobs();

    const interval = setInterval(fetchJobs, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-container">
       <Navbar />
      <h1 className="dashboard-title">
        Distributed Job Queue Dashboard
      </h1>

      <p className="dashboard-subtitle">
        Real-Time Monitoring & Analytics
      </p>

      <p className="job-count">
         {jobs.length} Total Jobs Processed
      </p>

      <div className="analytics-container">

  <div className="analytics-card">
    <h3>Total Jobs</h3>
    <p>{stats.total}</p>
  </div>

  <div className="analytics-card">
    <h3>Success Rate</h3>
    <p>{stats.successRate}%</p>
  </div>

  <div className="analytics-card">
    <h3>Failure Rate</h3>
    <p>{stats.failureRate}%</p>
  </div>

</div>

      <div className="stats-container">
        <div className="stat-card pending-card">
          <h3>Pending</h3>
          <p>{stats.pending}</p>
        </div>

        <div className="stat-card processing-card">
          <h3>Processing</h3>
          <p>{stats.processing}</p>
        </div>

        <div className="stat-card completed-card">
          <h3>Completed</h3>
          <p>{stats.completed}</p>
        </div>

        <div className="stat-card failed-card">
          <h3>Failed</h3>
          <p>{stats.failed}</p>
        </div>
      </div>

      <h2 className="section-title">
           Recent Queue Activity
      </h2>

      {jobs.map((job) => (
          <div className="job-card" key={job.id}>
          Job {job.id} -

          <span className={`status ${job.status.toLowerCase()}`}>
         {job.status}
        </span>
  </div>
))}
    </div>
  );
}

export default DashboardPage;