import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.email.value === "" || e.target.password.value === "") {
      setError("Please fill out all fields");
    } else {
      const error = "Only the Admin is authorized to login";
      setError(error);
      setTimeout(() => {
        setError("");
        setValues({
          email: "",
          password: "",
        });
      }, 3000);
    }
  };

  return (
    <div className="w-full h-screen pt-[20vh] px-4">
      <div className="bg-white dark:bg-[#2d333b] max-w-[450px] mx-auto mt-[5vh] rounded-xl shadow-xl shadow-gray-300 dark:shadow-lg dark:shadow-gray-700">
        <div className="mx-4 lg:px-12 flex items-center py-6">
          <form onSubmit={handleSubmit} className="w-full py-4">
            <div className="text-center">
              <p className="text-gray-800 dark:text-gray-300 text-2xl font-bold">
                Login
              </p>
            </div>
            <div>
              {error && (
                <p className="text-red-500 mt-4 text-center text-sm font-bold">
                  {error}
                </p>
              )}
            </div>
            <div className="py-6">
              <label className="text-lg text-gray-900 dark:text-gray-300 font-[400]">
                Email
              </label>
              <input
                type="email"
                className="block w-full border-2 border-gray-300 rounded-md px-3 py-[6px] my-2 dark:border-gray-600 bg-transparent outline-none"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              <label className="text-lg font-[400]">Password</label>
              <div className="flex justify-between items-center w-full border-2 border-gray-300 rounded-md px-3 py-[6px] my-2 outline-none dark:border-gray-600 bg-trasparent">
                <input
                  type={showPassword ? "text" : "password"}
                  className="bg-transparent outline-none"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
                <div
                  className="cursor-pointer text-gray-500 dark:text-gray-300"
                  onClick={handleShowPassword}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mb-3">
              <button
                type="submit"
                className="px-8 py-2 text-lg font-bold rounded-lg bg-[#0284c7] hover:bg-[#0a91d5] dark:bg-[#045d8a] dark:hover:bg-[#0679b3] text-gray-100"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
