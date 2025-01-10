import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import logo from "../assets/library.png";
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
    <div className="px-4 py-2 w-full bg-purple-100 bg-opacity-80 backdrop-blur-md sticky top-0 z-50 shadow-xl animate__animated animate__fadeInDown">
      <nav className="flex items-center justify-between  relative lg:w-10/12 mx-auto boxShadow font-oswald">
        <Link
          to="/"
          className="btn shadow-none hover:bg-transparent bg-transparent border-none outline-none"
        >
          <img src={logo} alt="logo" className="w-6 lg:w-10 object-cover" />
          <span className="font-pacifico text-lg lg:text-xl bg-gradient-to-br from-purple-400 via-purple-700 to-purple-950 bg-clip-text text-transparent">
            Study Shelf
          </span>
        </Link>

        <ul className="items-center gap-8 text-xl  xl:flex hidden font-semibold ">
          <NavLink to="/">
            <li className="bg-gradient-to-br from-purple-400 via-purple-700 to-purple-950 bg-clip-text text-transparent">
              Home
            </li>
          </NavLink>
          <NavLink to="/allBooks">
            <li className="bg-gradient-to-br from-purple-400 via-purple-700 to-purple-950 bg-clip-text text-transparent">
              All Books
            </li>
          </NavLink>
          <NavLink to="/events">
            <li className="bg-gradient-to-br from-purple-400 via-purple-700 to-purple-950 bg-clip-text text-transparent">
              Events
            </li>
          </NavLink>

          {user && (
            <>
              <NavLink to="/addBooks">
                <li className="bg-gradient-to-br from-purple-400 via-purple-700 to-purple-950 bg-clip-text text-transparent">
                  Add Books
                </li>
              </NavLink>
              <NavLink to="/borrowedBooks">
                <li className="bg-gradient-to-br from-purple-400 via-purple-700 to-purple-950 bg-clip-text text-transparent">
                  Borrowed Books
                </li>
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
                  className="btn btn-sm border-none font-semibold text-sm rounded-md bg-purple-700 hover:bg-purple-800 text-white transition-all duration-300"
                >
                  Log Out
                </button>
              </Link>
            </>
          ) : (
            <div className="flex border rounded-md">
              <Link to="/login">
                <button className="btn btn-sm border-none font-semibold rounded-none rounded-l-md bg-purple-700 hover:bg-purple-900 text-white transition-all duration-300">
                  Login
                </button>
              </Link>

              <Link to="/register">
                <button className="btn btn-sm border-none font-semibold rounded-none rounded-r-md bg-purple-200 hover:bg-purple-300 text-black transition-all duration-300">
                  Register
                </button>
              </Link>
            </div>
          )}

          {mobileSidebarOpen ? (
            <CgClose
              className="text-3xl mr-1 cursor-pointer xl:hidden flex"
              onClick={() => setMobileSidebarOpen(false)}
            />
          ) : (
            <CiMenuFries
              className="text-3xl mr-1 cursor-pointer xl:hidden flex"
              onClick={() => setMobileSidebarOpen(true)}
            />
          )}
        </div>

        <aside
          className={` ${
            mobileSidebarOpen
              ? "opacity-100 z-20"
              : "-translate-y-64 opacity-0 z-[-1]"
          } xl:hidden bg-white  boxShadow p-4 text-center absolute top-[65px] right-0 w-full rounded-md transition-all duration-1000`}
        >
          <ul className="items-center gap-12 text-[1rem] text-gray-600 flex flex-col text-xl">
            <NavLink to="/">
              <li className="bg-gradient-to-br from-purple-400 via-purple-700 to-purple-950 bg-clip-text text-transparent">
                Home
              </li>
            </NavLink>
            <NavLink to="/allBooks">
              <li className="bg-gradient-to-br from-purple-400 via-purple-700 to-purple-950 bg-clip-text text-transparent">
                All Books
              </li>
            </NavLink>
            <NavLink to="/addBooks">
              <li className="bg-gradient-to-br from-purple-400 via-purple-700 to-purple-950 bg-clip-text text-transparent">
                Add Books
              </li>
            </NavLink>
            {user && (
              <>
                <NavLink to="/borrowedBooks">
                  <li className="bg-gradient-to-br from-purple-400 via-purple-700 to-purple-950 bg-clip-text text-transparent">
                    Borrowed Books
                  </li>
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
