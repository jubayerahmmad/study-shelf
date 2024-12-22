import Lottie from "lottie-react";
import registerAnimation from "../../assets/register-animation.json";
import { FaGoogle } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { registerUser, updateUser, googleLogin } = useAuth();
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    setError("");
    // password validation
    const lengthRegex = /^.{6,}$/;
    if (!lengthRegex.test(password)) {
      setError("Password Must be contain atleast 6 Characters");
      return;
    }
    const uppercaseRegex = /[A-Z]/;
    if (!uppercaseRegex.test(password)) {
      setError("Password Must be contain atleast One Uppercase Letter");
      return;
    }
    const lowercaseRegex = /[a-z]/;
    if (!lowercaseRegex.test(password)) {
      setError("Password Must be contain atleast One Lowercase Letter");
      return;
    }

    // register user
    registerUser(email, password)
      .then(() => {
        //update name,photo
        const updatedInfo = { displayName: name, photoURL: photo };
        updateUser(updatedInfo)
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Registration Successfully Completed",
              showConfirmButton: false,
              timer: 1500,
            });
            form.reset();
            navigate("/");
          })
          .catch((err) => {
            setError(err.code);
          });
      })
      .catch((error) => {
        // console.log(error.code);
        setError(error.code.split("/")[1].split("-").join(" ").toUpperCase());
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
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

  return (
    <div className="p-6 font-oswald w-10/12 mx-auto rounded-2xl my-8  border border-purple-600 shadow-md">
      <Helmet>
        <title>Register - Study Shelf</title>
      </Helmet>
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
        Register Now
      </h2>
      <p className="font-semibold text-center mb-4">
        Already Have an Account?{" "}
        <Link to="/login">
          <span className="font-bold text-purple-600">Login</span>
        </Link>
      </p>
      <div className="lg:flex items-center justify-center">
        {/* Form */}
        <div className="lg:w-1/2 lg:p-8">
          <form onSubmit={handleRegister} className="space-y-6">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-600"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full px-5 py-3 mt-2 border border-gray-300 border-none rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-200"
              />
            </div>

            {/* Photo URL Input */}
            <div>
              <label
                htmlFor="photoUrl"
                className="text-sm font-medium text-gray-600"
              >
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                required
                className="w-full px-5 py-3 mt-2 border border-gray-300 border-none rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-200"
              />
            </div>

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
                className="text-sm font-medium text-gray-600 "
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                className="w-full px-5 py-3 mt-2 border border-gray-300 border-none rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-200"
              />
            </div>
            {error && (
              <p className="font-bold font-merriweather text-red-500">
                {error}
              </p>
            )}

            {/* Register Button */}
            <div>
              <button
                type="submit"
                className="w-full btn border-none bg-purple-600 text-white py-3 rounded-full hover:bg-purple-700"
              >
                Register
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
              <FaGoogle></FaGoogle>Register with Google
            </button>
          </div>
        </div>

        {/* Lottie animation */}
        <div className="lg:w-1/2">
          <Lottie
            animationData={registerAnimation} // Path to your animation JSON
            loop={true} // Loop the animation
            autoplay={true} // Autoplay the animation
            className="w-full h-96" // Set the size of the animation
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
