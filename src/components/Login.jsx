import { useState } from "react";

const Login = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "", clientId: "" });
  const [errors, setErrors] = useState({});

  const handleToggle = () => setIsToggled(!isToggled);
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (isToggled && !formData.clientId) {
      newErrors.clientId = "Client ID is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully", formData);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center flex-col bg-gradient-to-r from-purple-300 to-pink-300">
      <div className="mt-10 mx-auto w-full max-w-sm bg-white/50 p-8 rounded-2xl shadow-lg">
        <h5 className="text-center text-2xl font-bold text-purple-800">Welcome</h5>
        <h6 className="text-center text-lg text-gray-700">To Support team</h6>
        <div className="mt-4 flex justify-center">
          <div className="flex items-center rounded-md shadow-md border border-blue-200">
            <span
              className={`px-6 py-2 cursor-pointer text-sm font-semibold rounded-l-md ${
                !isToggled ? "bg-blue-400 text-white" : "bg-white text-gray-700"
              }`}
              onClick={handleToggle}
            >
              Admin
            </span>
            <span
              className={`px-6 py-2 cursor-pointer text-sm font-semibold rounded-r-md ${
                isToggled ? "bg-blue-400 text-white" : "bg-white text-gray-700"
              }`}
              onClick={handleToggle}
            >
              Client
            </span>
          </div>
        </div>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          {isToggled && (
            <div>
              <label className="block text-purple-800 font-semibold">Client ID</label>
              <input
                type="text"
                name="clientId"
                placeholder="Client ID"
                onChange={handleInputChange}
                className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              {errors.clientId && <p className="text-red-600 text-sm">{errors.clientId}</p>}
            </div>
          )}

          <div>
            <label className="block text-purple-800 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
              className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-purple-800 font-semibold">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                onChange={handleInputChange}
                className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "👁️" : "🔒"}
              </button>
            </div>
            {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}
          </div>

          {!isToggled && (
            <div className="text-right text-blue-600 text-sm cursor-pointer hover:underline">
              Forgot Password?
            </div>
          )}

          <button type="submit" className="w-full bg-purple-800 text-white py-2 mt-4 rounded-md hover:bg-pink-500 transition">
            Login
          </button>
        </form>

        <div className="text-center text-sm mt-6 text-gray-700">
          Don't have an account? <span className="text-blue-600 cursor-pointer hover:underline">Sign Up</span>
        </div>
      </div>
    </div>
  );
};

export default Login;