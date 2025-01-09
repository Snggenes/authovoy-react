import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Home } from "./pages";

export default function App() {
  return (
    <div>
      <ToastContainer position="bottom-left" autoClose={1500} hideProgressBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </Router>
    </div>
  );
}
