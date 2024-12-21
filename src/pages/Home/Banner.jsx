// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css/bundle";

const Banner = () => {
  return (
    <div className="w-10/12 mx-auto my-8 rounded-md">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 3500, // Time between slides (in milliseconds)
          disableOnInteraction: false, // Keeps autoplay running even after interaction
        }}
        navigation
        parallax={true} // Enable the parallax effect
        loop={true} // Enable infinite loop
        speed={800} // Slide transition speed
        paginationn={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        effect="slide" // Choose the slide effect
      >
        <SwiperSlide>
          <div
            className="swiper-parallax object-cover bg-cover bg-center h-[300px] lg:h-[800px] relative group transition duration-500 rounded-xl"
            style={{
              backgroundImage: `url("https://i.ibb.co.com/bHXw9ZD/priscilla-du-preez-gge-Z9oy-I-PE-unsplash.jpg")`,
              backgroundPosition: "center",
            }}
            data-swiper-parallax="-20%"
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-70 transition-opacity duration-300 rounded-xl"></div>

            {/* Content (Text) */}
            <div className="flex flex-col justify-center items-center w-full h-full text-white text-4xl font-bold relative z-10 opacity-100 transition-opacity duration-300 space-y-2 p-4 rounded-xl">
              <h2 className="text-white text-2xl lg:text-6xl font-bold mb-4 animate__animated animate__fadeInLeft font-oswald">
                Welcome to{" "}
                <span className="text-purple-400 text-3xl lg:text-7xl font-pacifico">
                  Study Shelf
                </span>
              </h2>
              <p className="text-gray-300 text-sm lg:text-xl max-w-6xl text-center animate__animated animate__fadeInLeft font-merriweather">
                Study Shelf is a platform for book lovers. Here you can find a
                wide range of books, from classics to modern bestsellers.
                Whether you're a student, a professional, or just a casual
                reader, Study Shelf has something for everyone. So, start
                exploring and expand your knowledge!
              </p>{" "}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="swiper-parallax object-cover bg-cover bg-center h-[300px] lg:h-[800px] relative group transition duration-500 rounded-xl"
            style={{
              backgroundImage: `url("https://i.ibb.co.com/8B9Bfg5/pexels-mart-production-8872714.jpg")`,
              backgroundPosition: "center",
            }}
            data-swiper-parallax="-20%"
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-70 transition-opacity duration-300 rounded-xl"></div>

            {/* Content (Text) */}
            <div className="flex flex-col justify-center items-center w-full h-full text-white text-4xl font-bold relative z-10 opacity-100 transition-opacity duration-300 space-y-2 p-4 rounded-xl">
              <h2 className="text-white text-2xl lg:text-6xl font-bold mb-4 animate__animated animate__fadeInLeft font-oswald">
                Unlock Your Reading Journey
              </h2>
              <p className="text-gray-300 text-sm lg:text-xl max-w-6xl text-center animate__animated animate__fadeInLeft font-merriweather">
                Explore a vast collection of books across various genres and
                categories. From timeless classics to modern bestsellers, Study
                Shelf has something for every book lover.
              </p>{" "}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="swiper-parallax object-cover bg-cover bg-center h-[300px] lg:h-[800px] relative group transition duration-500 rounded-xl"
            style={{
              backgroundImage: `url("https://i.ibb.co.com/MD8x5ct/man-library-with-tablet.jpg")`,
              backgroundPosition: "center",
            }}
            data-swiper-parallax="-20%"
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-70 transition-opacity duration-300 rounded-xl"></div>

            {/* Content (Text) */}
            <div className="flex flex-col justify-center items-center w-full h-full text-white text-4xl font-bold relative z-10 opacity-100 transition-opacity duration-300 space-y-2 p-4 rounded-xl">
              <h2 className="text-white text-2xl lg:text-6xl font-bold mb-4 animate__animated animate__fadeInLeft font-oswald">
                Unlock New Perspectives
              </h2>
              <p className="text-gray-300 text-sm lg:text-xl max-w-6xl text-center animate__animated animate__fadeInLeft font-merriweather">
                Discover a wide range of books from different genres and
                categories. Study Shelf has something for everyone, from
                timeless classics to modern bestsellers.
              </p>{" "}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="swiper-parallax object-cover bg-cover bg-center h-[300px] lg:h-[800px] relative group transition duration-500 rounded-xl"
            style={{
              backgroundImage: `url("https://i.ibb.co.com/6gcR269/pexels-element5-1370298.jpg")`,
              backgroundPosition: "center",
            }}
            data-swiper-parallax="-20%"
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-70 transition-opacity duration-300 rounded-xl"></div>

            {/* Content (Text) */}
            <div className="flex flex-col justify-center items-center w-full h-full text-white text-4xl font-bold relative z-10 opacity-100 transition-opacity duration-300 space-y-2 p-4 rounded-xl">
              <h2 className="text-white text-2xl lg:text-6xl font-bold mb-4 animate__animated animate__fadeInLeft font-oswald">
                Your Learning Hub
              </h2>
              <p className="text-gray-300 text-sm lg:text-xl max-w-6xl text-center animate__animated animate__fadeInLeft font-merriweather">
                Organize, borrow, and manage your favorite reads with ease.
                StudyShelf simplifies library management like never before.
              </p>{" "}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
