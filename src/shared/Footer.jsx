import logo from "../assets/library.png";
// import bg from "../assets/layered_waves-1736498112913.png";

// react icons
import { CgFacebook } from "react-icons/cg";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { SlArrowUp } from "react-icons/sl";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <footer
      // style={{
      //   backgroundImage: `url(${bg})`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      // }}
      className="bg-purple-100 boxShadow w-full p-3 lg:p-4 relative font-oswald"
    >
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
          <a className="text-[1.3rem] p-1.5 cursor-pointer rounded-full bg-white text-text boxShadow">
            <CgFacebook />
          </a>
          <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-white text-text boxShadow">
            <BsTwitter />
          </a>
          <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-white text-text boxShadow">
            <BsInstagram />
          </a>
          <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-white text-text boxShadow">
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

      <SlArrowUp
        onClick={scrollToTop}
        className="p-2 rounded-full border border-gray-900 fixed bottom-4 right-4 cursor-pointer text-[2rem] text-black"
      />
    </footer>
  );
};

export default Footer;
