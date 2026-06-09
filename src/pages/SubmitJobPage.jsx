import "./SubmitJobPage.css";
import Navbar from "../components/Navbar";

function SubmitJobPage() {
  return (
    <div className="submit-container">
      <Navbar />

      <div className="submit-form">
        <h1>Submit Job</h1>

        <label>Job Type</label>

        <select>
          <option>EMAIL</option>
          <option>REPORT</option>
          <option>IMAGE</option>
        </select>

        <label>Job Input</label>

        <input
          type="text"
          placeholder="Enter job input"
        />

        <button>Submit Job</button>
      </div>
    </div>
  );
}

export default SubmitJobPage;