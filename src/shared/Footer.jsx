import logo from "../assets/library.png";

// react icons
import { CgFacebook } from "react-icons/cg";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-purple-100 boxShadow w-full p-3 lg:p-4 relative font-oswald">
      <div className="max-w-7xl mx-auto flex items-center justify-center pt-5 flex-col gap-4 ">
        <img src={logo} alt="logo" className="" />
        <h2 className="text-4xl font-semibold font-pacifico bg-gradient-to-br from-purple-400 via-purple-700 to-purple-950 bg-clip-text text-transparent">
          Study Shelf
        </h2>

        <p className="text-[0.9rem] text-center text-gray-900">
          Study Shelf is a platform designed to facilitate learning and
          exploration. Our mission is to provide access to a wide range of
          educational resources, fostering a community that values knowledge
          sharing and personal growth.
        </p>

        <div className="flex gap-[15px] text-black mt-4">
          <a
            href="https://www.facebook.com/zubayerahmmad.1"
            target="_blank"
            className="text-[1.3rem] p-1.5 cursor-pointer rounded-full bg-white text-text boxShadow"
          >
            <CgFacebook />
          </a>
          <a
            href="https://www.linkedin.com/in/jubayer-ahmmad073"
            target="_blank"
            className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-white text-text boxShadow"
          >
            <BsLinkedin />
          </a>
        </div>

        <div className="divider"></div>

        <div className="px-3 w-full">
          <h3 className="text-[0.9rem] text-gray-900 text-center">
            ©2025 All Rights Reserved{" "}
            <span className="font-semibold font-pacifico bg-gradient-to-br from-purple-400 via-purple-700 to-purple-950 bg-clip-text text-transparent">
              Study Shelf
            </span>
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
