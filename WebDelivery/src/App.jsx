import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/navbar/Navbar";
import Dashboard from "./pages/mainpages/Dashboard";
import HomePage from "./pages/mainpages/HomePage";
import NotFound from "./pages/mainpages/NotFound";
import './App.css'

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
