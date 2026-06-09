import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import SubmitJobPage from "./pages/SubmitJobPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/submit-job" element={<SubmitJobPage />} />
    </Routes>
  );
}

export default App;