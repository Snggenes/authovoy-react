import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ScrollToTop from "./components/scroll-to-top";

import { Home, Register, EmailVerify, Login } from "./pages";
import Navbar from "./components/navbar";

export default function App() {
  return (
    <div>
      <ToastContainer position="bottom-left" autoClose={1500} hideProgressBar />
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/email-verify" element={<EmailVerify />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </Router>
    </div>
  );
}
