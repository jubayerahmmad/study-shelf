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
    <div className="px-6 py-4 w-full bg-slate-100 bg-opacity-60 backdrop-blur-sm sticky top-0 z-50">
      <nav className="flex items-center justify-between  relative lg:w-10/12 mx-auto boxShadow font-oswald">
        <Link
          to="/"
          className="btn shadow-none hover:bg-transparent bg-transparent border-none outline-none"
        >
          <img src={logo} alt="logo" className="w-6 lg:w-12 object-cover" />
          <span className="font-pacifico text-lg lg:text-2xl text-purple-900">
            Study Shelf
          </span>
        </Link>

        <ul className="items-center gap-12 text-2xl  xl:flex hidden font-semibold ">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/allBooks">
            <li>All Books</li>
          </NavLink>
          <NavLink to="/addBooks">
            <li>Add Books</li>
          </NavLink>
          {user && (
            <>
              <NavLink to="/borrowedBooks">
                <li>Borrowed Books</li>
              </NavLink>
            </>
          )}
        </ul>

        <div className="items-center gap-[10px] flex">
          {user ? (
            <>
              <div className="avatar cursor-pointer">
                <div
                  className="ring-purple-700 ring-offset-base-100 w-6 lg:w-10 rounded-full ring ring-offset-2"
                  data-tooltip-id="avatar-tooltip"
                  data-tooltip-offset={10}
                >
                  <img
                    referrerPolicy="no-referrer"
                    src={`${user?.photoURL}`}
                    alt="user photo"
                  />
                </div>
              </div>
              {/* Tooltip with dropdown */}
              <Tooltip
                id="avatar-tooltip"
                place="right"
                variant="info"
                className="z-50"
                clickable={true}
                delayHide={100}
                offset={{ right: 20 }}
              >
                <div className="rounded shadow-lg w-40 p-2 text-center space-y-3">
                  <div className="flex justify-center my-2">
                    <img
                      className="rounded-full h-14 w-14 object-cover ring-purple-700 ring-offset-base-100 ring ring-offset-2"
                      src={user.photoURL}
                      alt="user image"
                    />
                  </div>
                  <p className="text-white font-semibold mb-2">
                    {user.displayName}
                  </p>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-sm w-full bg-purple-600 font-semibold text-lg text-white hover:bg-purple-800 border-none"
                  >
                    Log Out
                  </button>
                </div>
              </Tooltip>
              <Link>
                <button
                  onClick={handleLogOut}
                  className="btn btn-xs lg:btn-md border-none font-semibold text-sm lg:text-lg rounded-md bg-purple-700 hover:bg-purple-800 text-white transition-all duration-300"
                >
                  Log Out
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="btn btn-xs lg:btn-md border-none font-semibold text-sm lg:text-lg rounded-md bg-purple-700 hover:bg-purple-800 text-white transition-all duration-300">
                  Login
                </button>
              </Link>

              <Link to="/register">
                <button className="btn btn-xs lg:btn-md border-none font-semibold text-sm lg:text-lg rounded-md bg-purple-700 hover:bg-purple-800 text-white transition-all duration-300">
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
              <li className="hover:border-b-purple-800 border-b-[2px] border-transparent transition-all duration-500 cursor-pointer">
                Home
              </li>
            </NavLink>
            <NavLink to="/allBooks">
              <li className="hover:border-b-purple-800 border-b-[2px] border-transparent transition-all duration-500 cursor-pointer">
                All Books
              </li>
            </NavLink>
            <NavLink to="/addBooks">
              <li className="hover:border-b-purple-800 border-b-[2px] border-transparent transition-all duration-500 cursor-pointer">
                Add Books
              </li>
            </NavLink>
            {user && (
              <>
                <NavLink to="/borrowedBooks">
                  <li>Borrowed Books</li>
                </NavLink>
              </>
            )}
          </ul>
        </aside>
      </nav>
    </div>
  );
};

export default Navbar;
