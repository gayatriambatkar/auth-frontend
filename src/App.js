import { Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Registration from "../src/components/Registration";
import Login from "../src/components/Login";
import Footer from "../src/components/footer"; 

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      <Navbar />
      
      <div className="flex-grow">
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
