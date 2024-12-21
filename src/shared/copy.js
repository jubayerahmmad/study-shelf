// {
//   user ? (
//     <>
//       <div className="avatar cursor-pointer">
//         <div
//           className="ring-cyan-400 ring-offset-base-100 w-6 lg:w-10 rounded-full ring ring-offset-2"
//           data-tooltip-id="avatar-tooltip"
//           data-tooltip-offset={10}
//         >
//           <img src={`${user.photoURL ? user.photoURL : <FaUser></FaUser>}`} />
//         </div>
//       </div>
//       {/* Tooltip with dropdown */}
//       <Tooltip
//         id="avatar-tooltip"
//         place="right"
//         className="z-50"
//         clickable={true}
//         effect="solid"
//         delayHide={100}
//         offset={{ right: 20 }}
//       >
//         <div className="bg-white border border-gray-200 rounded shadow-lg w-40 p-4">
//           <p className="text-gray-700 font-semibold mb-2">{user.displayName}</p>
//           <Link>
//             <button className="btn btn-sm w-full lg:btn-md dark:border-none dark:outline-none font-semibold text-lg  bg-[#3B9DF8] text-white hover:bg-blue-400 transition-all duration-300 ">
//               Log Out
//             </button>
//           </Link>
//         </div>
//       </Tooltip>
//       <Link>
//         <button className="btn btn-sm lg:btn-md dark:border-none dark:outline-none font-semibold text-lg rounded-md bg-[#3B9DF8] text-white hover:bg-blue-400 transition-all duration-300 ">
//           Log Out
//         </button>
//       </Link>
//     </>
//   ) : (
//     <>
//       <Link to="/login">
//         <button className="btn btn-sm lg:btn-md font-semibold text-lg rounded-md dark:border-none dark:outline-none bg-[#3B9DF8] text-white hover:bg-blue-400 transition-all duration-300 ">
//           Login
//         </button>
//       </Link>

//       <Link to="/register">
//         <button className="btn btn-sm lg:btn-md font-semibold text-lg rounded-md dark:border-none dark:outline-none bg-[#3B9DF8] text-white hover:bg-blue-400 transition-all duration-300 ">
//           Register
//         </button>
//       </Link>
//     </>
//   );
// }
