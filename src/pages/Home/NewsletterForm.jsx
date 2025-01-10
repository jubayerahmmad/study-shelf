import React from "react";
import { MdOutlineMail } from "react-icons/md";

const NewsletterForm = () => {
  return (
    <section className="w-full py-[20px] sm:py-[40px] px-6 bg-gradient-to-br from-[#161819] to-[#5C26B5] relative overflow-hidden">
      <div
        className="max-w-7xl mx-auto border p-6 rounded-lg shadow-2xl shadow-purple-500 z-30
      "
      >
        <div className="w-full sm:w-[60%]">
          <h1 className="text-[2rem] sm:text-[2.8rem]  bg-gradient-to-br from-purple-400 via-purple-700 to-purple-950 bg-clip-text text-transparent">
            Subscribe to Our Newsletter
          </h1>
          <p className="text-[0.9rem] text-[#CBCBCB] mt-5">
            Get weekly update about our books on your email, no spam guaranteed
            we promise ✌️
          </p>
        </div>

        <div className="relative mt-12 mb-6">
          <input
            className="py-3 pr-4 pl-12 w-full outline-none"
            placeholder="Email Address"
          />
          <MdOutlineMail className="p-1.5 bg-[#F8F8F8] text-[#6C777C] text-[2rem] absolute top-[50%] left-2 transform translate-y-[-50%]" />

          <button className="absolute bottom-[-20px] right-[-15px] bg-[#9323d4] hover:bg-[#b83dff] text-white py-2 px-4">
            Subscribe
          </button>
        </div>
      </div>

      <MdOutlineMail className="lg:text-[30rem] text-[20rem] absolute top-4 -right-6 lg:top-[-100px] lg:right-[-100px] text-white opacity-10 rotate-[-30deg]" />
    </section>
  );
};

export default NewsletterForm;
