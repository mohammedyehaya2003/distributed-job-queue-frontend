import "./LandingPage.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
        <Navbar />
      <h1 className="landing-title">
        Distributed Job Queue System
      </h1>

      <p className="landing-subtitle">
        Reliable background job processing with monitoring and analytics.
      </p>

      <div className="landing-buttons">
        <button onClick={() => navigate("/dashboard")}>
          View Dashboard
        </button>

        <button onClick={() => navigate("/submit-job")}>
          Submit Job
        </button>
      </div>

      <div className="how-it-works">
        <h2>How It Works</h2>

        <div className="steps">
          <div className="step-card">
            <h3>1</h3>
            <p>Submit Job</p>
          </div>

          <div className="step-card">
            <h3>2</h3>
            <p>Worker Processes Job</p>
          </div>

          <div className="step-card">
            <h3>3</h3>
            <p>Track Status Live</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;