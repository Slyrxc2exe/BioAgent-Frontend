import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AnalyzePage from "./Pages/AnalyzePage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />   {/* <-- FIX */}
        <Route path="/analyze" element={<AnalyzePage />} />
      </Routes>
    </Router>
  );
}
