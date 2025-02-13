import "./App.css";
import { Opener } from "./pages/Opener";
import { Ask } from "./pages/Ask";
import { Yay } from "./pages/Yay";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Opener />} />
        <Route path="/mylove" element={<Ask />} />
        <Route path="/yay" element={<Yay />} />
      </Routes>
    </Router>
  );
}

export default App;
