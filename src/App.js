import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify"; // ✅ Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // ✅ Import Toast styles

import Navbar from "../src/components/Navbar";
import Registration from "../src/components/Registration";
import Login from "../src/components/Login";
import Footer from "../src/components/Footer"; 

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />

      {/* ✅ ToastContainer for notifications */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

      {/* ✅ Main content area */}
      <div className="flex-grow flex justify-center items-center">
        <Routes>
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<h2 className="mt-10 text-xl text-center">Welcome to My App</h2>} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
