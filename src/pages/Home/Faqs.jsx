import Lottie from "lottie-react";
import { useState } from "react";
import faqAnimation from "../../assets/faq-animation.json";

const Faqs = () => {
  const [bgAccording, setBgAccording] = useState(null);
  // accordion data
  const accordionData = [
    {
      title: "How can I borrow a book online?",
      description:
        "Simply log in to your account, find the book you want, and click the borrow button.",
    },
    {
      title: "Can I view my borrowing history?",
      description:
        "Yes! Log in to your account,  you’ll find a page named Borrowed Books and you will see history of all borrowed and returned books.",
    },
    {
      title: "How many books can I borrow at a time?",
      description: `You can borrow up to 3 books simultaneously.`,
    },

    {
      title: `What is the borrowing duration?`,
      description: `Books can be borrowed for up to 14 days. Late returns may incur a fine.`,
    },

    {
      title: `Are there any membership fees?`,
      description: `No, StudyShelf is free to use for all library members.`,
    },
  ];

  const handlebgAccording = (index) =>
    setBgAccording((prevIndex) => (prevIndex === index ? null : index));
  return (
    <div className="max-w-7xl mx-auto my-6 p-4">
      <div className="text-center my-6 space-y-3">
        <h1 className="text-3xl lg:text-6xl font-oswald font-bold bg-gradient-to-br from-purple-400 via-purple-700 to-purple-950 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h1>
        <p className="text-xs lg:text-lg text-gray-600 font-merriweather">
          Check our frequently asked questions to find answers to common
          queries.
        </p>
      </div>
      <div className="lg:flex gap-4 items-center" data-aos="zoom-in">
        {/* Lottie */}
        <Lottie
          animationData={faqAnimation} // Path to your animation JSON
          loop={true} // Loop the animation
          autoplay={true} // Autoplay the animation
          className="w-full h-96" // Set the size of the animation
        />
        {/* Accordion */}
        <div className="flex gap-3 flex-col w-full">
          {accordionData?.map((accordion, index) => (
            <article key={index} className="bg-[#e5eaf2] rounded">
              <div
                className="flex gap-2 cursor-pointer items-center justify-between w-full bg-purple-950 p-3 rounded"
                onClick={() => handlebgAccording(index)}
              >
                <h2 className={` text-[#ffffff] text-[1.2rem] font-oswald`}>
                  {accordion.title}
                </h2>
                <svg
                  className="fill-[#ffffff] shrink-0 ml-8"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`transform origin-center transition duration-200 ease-out ${
                      bgAccording === index && "!rotate-180"
                    }`}
                  />
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                      bgAccording === index && "!rotate-180"
                    }`}
                  />
                </svg>
              </div>
              <div
                className={`grid transition-all duration-300 overflow-hidden ease-in-out bg-gray-100 ${
                  bgAccording === index
                    ? "grid-rows-[1fr] opacity-100 p-3"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="text-[#424242] text-[0.9rem] overflow-hidden font-merriweather">
                  {accordion.description}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
