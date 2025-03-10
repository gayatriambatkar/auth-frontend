import { useState } from "react";


const Registration = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) newErrors.email = "Invalid email format";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters long";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted", formData);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-300 to-pink-300">
      <div className="w-full max-w-md bg-white/50 p-6 rounded-lg shadow-md">
        <h2 className="text-purple-800 text-2xl font-bold mb-4 text-center">Register</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input 
              type="text" 
              name="name" 
              placeholder="Name" 
              onChange={handleChange} 
              className="w-full p-3 border border-gray-300 rounded-md focus:border-purple-500" 
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div>
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              onChange={handleChange} 
              className="w-full p-3 border border-gray-300 rounded-md focus:border-purple-500" 
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              onChange={handleChange} 
              className="w-full p-3 border border-gray-300 rounded-md focus:border-purple-500" 
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          <button className="w-full bg-purple-800 text-white py-3 rounded-md hover:bg-pink-500 transition" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;