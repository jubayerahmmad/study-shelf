import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import logo from "../assets/library.png";
import { Link, NavLink } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { BiLogOut } from "react-icons/bi";

const Navbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [isProfileHovered, setIsProfileHovered] = useState(false);
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
              <div
                className="relative w-fit h-full flex items-center justify-center"
                // onMouseEnter={() => setIsProfileHovered(true)}
                onMouseLeave={() => setIsProfileHovered(false)}
              >
                {/*  initial profile picture  */}
                <img
                  onMouseEnter={() => setIsProfileHovered(true)}
                  // onMouseLeave={() => setIsProfileHovered(false)}
                  referrerPolicy="no-referrer"
                  src={user?.photoURL}
                  alt="profile"
                  className="w-[50px] h-[50px] rounded-full object-cover border-[3px] cursor-pointer border-[#8e2cc7]"
                />

                {/*  tooltip  */}
                <div
                  className={` ${
                    isProfileHovered
                      ? "opacity-100 z-20 translate-y-0"
                      : "opacity-0 z-[-1] translate-y-[20px]"
                  } absolute top-[50px] left-[50%] transform translate-x-[-50%] bg-white w-[170px] lg:w-[250px] rounded-md p-[15px] shadow-md transition-all duration-300`}
                >
                  {/*  account details  */}
                  <div className="flex items-center justify-center flex-col">
                    <div>
                      <img
                        src={user?.photoURL}
                        alt="profile"
                        className="w-[80px] h-[80px] rounded-full ring-4 ring-[#8e2cc7] object-cover"
                      />
                    </div>
                    <h4 className="text-[1.1rem] font-[600] text-gray-700 mt-2">
                      {user?.displayName}
                    </h4>
                  </div>

                  {/*  send message  */}
                  <button
                    onClick={handleLogOut}
                    className="flex mx-auto hover:underline items-center gap-[8px] font-[500] text-[0.9rem] text-[#8928c9] mt-4"
                  >
                    <BiLogOut className="text-[1.1rem]" />
                    Log Out
                  </button>

                  {/*  bottom arrow  */}
                  <div className="bg-white w-[15px] h-[15px] rotate-[45deg] absolute top-[-7px] left-[50%] transform translate-x-[-50%]"></div>
                </div>
              </div>
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
