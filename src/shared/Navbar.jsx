import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { Tooltip } from "react-tooltip";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const { user, logoutUser } = useAuth();
  const handleLogOut = () => {
    logoutUser().then(() => {
      Swal.fire({
        icon: "success",
        title: "User Logged Out Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };

  return (
    <nav className="flex items-center justify-between w-full relative  boxShadow px-[10px] py-[8px] bg-gray-100 font-oswald">
      <Link to="/" className="btn shadow-none">
        <img src={logo} alt="logo" className="w-8 lg:w-12 object-cover" />
        <span className="font-pacifico text-xl">Study Shelf</span>
      </Link>

      <ul className="items-center gap-12 text-2xl  xl:flex hidden font-semibold ">
        <NavLink to="/">
          <li className="hover:text-[#3c0c80]">Home</li>
        </NavLink>
        <NavLink to="/allBooks">
          <li className="hover:text-[#3c0c80]">All Books</li>
        </NavLink>
        <NavLink to="/addBooks">
          <li className="hover:text-[#3c0c80]">Add Books</li>
        </NavLink>
        {user && (
          <>
            <NavLink to="/borrowedBooks">
              <li className="hover:text-[#3c0c80]">Borrowed Books</li>
            </NavLink>
          </>
        )}
      </ul>

      <div className="items-center gap-[10px] flex">
        {/* <Link to="/login">
          <button className="btn btn-xs lg:btn-md btn-outline font-medium lg:text-lg rounded-md text-[#3c0c80] hover:bg-[#3c0c80] transition-all duration-300 ">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="btn btn-xs lg:btn-md btn-outline font-medium lg:text-lg rounded-md text-[#3c0c80] hover:bg-[#3c0c80] transition-all duration-300 ">
            Register
          </button>
        </Link> */}
        {user ? (
          <>
            <div className="avatar cursor-pointer">
              <div
                className="ring-cyan-400 ring-offset-base-100 w-6 lg:w-10 rounded-full ring ring-offset-2"
                data-tooltip-id="avatar-tooltip"
                data-tooltip-offset={10}
              >
                <img
                  src={`${user.photoURL ? user.photoURL : <FaUser></FaUser>}`}
                />
              </div>
            </div>
            {/* Tooltip with dropdown */}
            <Tooltip
              id="avatar-tooltip"
              place="right"
              className="z-50"
              clickable={true}
              effect="solid"
              delayHide={100}
              offset={{ right: 20 }}
            >
              <div className="bg-white border border-gray-200 rounded shadow-lg w-40 p-4">
                <p className="text-gray-700 font-semibold mb-2">
                  {user.displayName}
                </p>
                <Link>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-sm btn-outline w-full lg:btn-md font-semibold text-lg  text-[#3c0c80] hover:bg-[#3c0c80] transition-all duration-300 "
                  >
                    Log Out
                  </button>
                </Link>
              </div>
            </Tooltip>
            <Link>
              <button
                onClick={handleLogOut}
                className="btn btn-sm btn-outline lg:btn-md font-semibold text-lg rounded-md text-[#3c0c80] hover:bg-[#3c0c80] transition-all duration-300 "
              >
                Log Out
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="btn btn-sm btn-outline lg:btn-md font-semibold text-lg rounded-md text-[#3c0c80] hover:bg-[#3c0c80]  transition-all duration-300 ">
                Login
              </button>
            </Link>

            <Link to="/register">
              <button className="btn btn-sm btn-outline lg:btn-md font-semibold text-lg rounded-md text-[#3c0c80] hover:bg-[#3c0c80] transition-all duration-300 ">
                Register
              </button>
            </Link>
          </>
        )}

        {mobileSidebarOpen ? (
          <CgClose
            className="text-3xl mr-1 cursor-pointer xl:hidden flex"
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          />
        ) : (
          <CiMenuFries
            className="text-3xl mr-1 cursor-pointer xl:hidden flex"
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          />
        )}
      </div>

      <aside
        className={` ${
          mobileSidebarOpen ? "opacity-100 z-20" : "opacity-0 z-[-1]"
        } xl:hidden bg-white  boxShadow p-4 text-center absolute top-[65px] right-0 w-full rounded-md transition-all duration-300`}
      >
        <ul className="items-center gap-12 text-[1rem] text-gray-600 flex flex-col text-xl">
          <NavLink to="/">
            <li className="hover:border-b-[#3c0c80] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer">
              Home
            </li>
          </NavLink>
          <NavLink to="/allBooks">
            <li className="hover:border-b-[#3c0c80] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer">
              All Books
            </li>
          </NavLink>
          <NavLink to="/addBooks">
            <li className="hover:border-b-[#3c0c80] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer">
              Add Books
            </li>
          </NavLink>
          {/* {user && (
            <>
              <NavLink to="/borrowedBooks">
                <li className="hover:text-[#3c0c80]">Borrowed Books</li>
              </NavLink>
            </>
          )} */}
          {/* {user ? (
            <>
              <Link>
                <button className="btn btn-sm lg:btn-md font-semibold text-lg rounded-md bg-[#3c0c80] text-white hover:bg-[#3f0396] transition-all duration-300 ">
                  Log Out
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="btn btn-sm lg:btn-md font-semibold text-lg rounded-md bg-[#3c0c80] text-white hover:bg-[#3f0396] transition-all duration-300 ">
                  Login
                </button>
              </Link>

              <Link to="/register">
                <button className="btn btn-sm lg:btn-md font-semibold text-lg rounded-md bg-[#3c0c80] text-white hover:bg-[#3f0396] transition-all duration-300 ">
                  Register
                </button>
              </Link>
            </>
          )} */}
        </ul>
      </aside>
    </nav>
  );
};

export default Navbar;
