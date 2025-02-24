import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { SlArrowUp } from "react-icons/sl";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Loader";

const MainLayout = () => {
  const { loader } = useAuth();
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className="flex flex-col min-h-screen">
          <Navbar></Navbar>

          <div className="flex-grow">
            <Outlet></Outlet>
          </div>
          <button className="btn btn-circle btn-sm btn-outline fixed bottom-4 right-4 text-sm text-purple-500 hover:bg-purple-800 z-50">
            <SlArrowUp onClick={scrollToTop} size={20} />
          </button>
          <Footer></Footer>
        </div>
      )}
    </>
  );
};

export default MainLayout;
