import Lottie from "lottie-react";
import loginAnimation from "../../assets/login-animation.json";
import { FaGoogle } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { loginUser, googleLogin } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();
  // console.log(state);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    loginUser(email, password)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "User Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(`${state ? state : "/"}`);
      })
      .catch((error) => {
        setError(error.code.split("/")[1].split("-").join(" ").toUpperCase());
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "User Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(`${state ? state : "/"}`);
      })
      .catch((error) => {
        setError(error.code.split("/")[1].split("-").join(" ").toUpperCase());
      });
  };

  return (
    <div className="p-6 font-oswald w-10/12 mx-auto rounded-2xl my-8 border border-purple-600 shadow-md">
      <Helmet>
        <title>Login - Study Shelf</title>
      </Helmet>
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
        Login Here
      </h2>
      <p className="font-semibold text-center mb-4">
        Don't Have an Account?{" "}
        <Link to="/register">
          <span className="font-bold text-purple-600">Register</span>
        </Link>
      </p>
      <div className="lg:flex items-center justify-center">
        {/* Form */}
        <div className="lg:w-1/2 lg:p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-5 py-3 mt-2 border border-gray-300 border-none rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-200"
              />
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                className="w-full px-5 py-3 mt-2 border border-gray-300 border-none rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-200"
              />
              <label className="label ">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            {error && (
              <p className="font-bold font-montserrat text-red-500">{error}</p>
            )}

            {/* Login Button */}
            <div>
              <button
                type="submit"
                className="w-full btn border-none bg-purple-600 text-white py-3 rounded-full hover:bg-purple-700"
              >
                Login
              </button>
            </div>
          </form>

          <div className="divider">OR</div>
          {/* Login with Google Button */}
          <div className="mt-6 text-center">
            <button
              type="submit"
              onClick={handleGoogleLogin}
              className="w-full btn btn-outline text-purple-700 hover:bg-purple-700 py-3 rounded-full"
            >
              <FaGoogle></FaGoogle> Login with Google
            </button>
          </div>
        </div>
        {/* Lottie Animation */}
        <div className="lg:w-1/2">
          <Lottie
            animationData={loginAnimation} // Path to your animation JSON
            loop={true} // Loop the animation
            autoplay={true} // Autoplay the animation
            className="w-full h-96" // Set the size of the animation
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
