// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css/bundle";

const Banner = () => {
  return (
    <div className="animate__animated animate__fadeInDown">
      <Swiper
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 4000, // Time between slides (in milliseconds)
          disableOnInteraction: false, // Keeps autoplay running even after interaction
        }}
        loop={true} // Enable infinite loop
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        effect="slide" // Choose the slide effect
      >
        <SwiperSlide>
          <div
            className="swiper-parallax object-cover bg-cover bg-center h-[300px] lg:h-[730px] relative group transition duration-500"
            style={{
              backgroundImage: `url("https://i.ibb.co.com/bHXw9ZD/priscilla-du-preez-gge-Z9oy-I-PE-unsplash.jpg")`,
              backgroundPosition: "center",
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-70 transition-opacity duration-300"></div>

            {/* Content (Text) */}
            <div className="flex flex-col justify-center items-center w-full h-full text-white text-4xl font-bold relative z-10 opacity-100 transition-opacity duration-300 space-y-2 p-4">
              <h2 className="text-white text-2xl lg:text-6xl font-bold mb-4 animate__animated animate__fadeInLeft font-oswald">
                Welcome to{" "}
                <span className="font-light bg-gradient-to-br from-purple-400 via-purple-700 to-purple-950 bg-clip-text text-transparent text-3xl lg:text-7xl font-pacifico">
                  Study Shelf
                </span>
              </h2>
              <p className="text-gray-300 text-xs px-5 lg:text-xl max-w-6xl text-center animate__animated animate__fadeInLeft font-merriweather">
                Study Shelf is a platform for book lovers. Here you can find a
                wide range of books, from classics to modern bestsellers.
                Whether you're a student or a professional Study Shelf has
                something for everyone. So, start exploring and expand your
                knowledge!
              </p>{" "}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="swiper-parallax object-cover bg-cover bg-center h-[300px] lg:h-[730px] relative group transition duration-500"
            style={{
              backgroundImage: `url("https://i.ibb.co.com/8B9Bfg5/pexels-mart-production-8872714.jpg")`,
              backgroundPosition: "center",
            }}
            data-swiper-parallax="-20%"
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-70 transition-opacity duration-300"></div>

            {/* Content (Text) */}
            <div className="flex flex-col justify-center items-center w-full h-full text-white text-4xl font-bold relative z-10 opacity-100 transition-opacity duration-300 space-y-2 p-4">
              <h2 className="text-white text-2xl lg:text-6xl font-bold mb-4 animate__animated animate__fadeInLeft font-oswald">
                Unlock Your Reading Journey
              </h2>
              <p className="text-gray-300 text-xs px-5 lg:text-xl max-w-6xl text-center animate__animated animate__fadeInLeft font-merriweather">
                Explore a vast collection of books across various genres and
                categories. From timeless classics to modern bestsellers, Study
                Shelf has something for every book lover.
              </p>{" "}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="swiper-parallax object-cover bg-cover bg-center h-[300px] lg:h-[730px] relative group transition duration-500"
            style={{
              backgroundImage: `url("https://i.ibb.co.com/MD8x5ct/man-library-with-tablet.jpg")`,
              backgroundPosition: "center",
            }}
            data-swiper-parallax="-20%"
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-70 transition-opacity duration-300"></div>

            {/* Content (Text) */}
            <div className="flex flex-col justify-center items-center w-full h-full text-white text-4xl font-bold relative z-10 opacity-100 transition-opacity duration-300 space-y-2 p-4">
              <h2 className="text-white text-2xl lg:text-6xl font-bold mb-4 animate__animated animate__fadeInLeft font-oswald">
                Unlock New Perspectives
              </h2>
              <p className="text-gray-300 text-xs px-5 lg:text-xl max-w-6xl text-center animate__animated animate__fadeInLeft font-merriweather">
                Discover a wide range of books from different genres and
                categories. Study Shelf has something for everyone, from
                timeless classics to modern bestsellers.
              </p>{" "}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="swiper-parallax object-cover bg-cover bg-center h-[300px] lg:h-[730px] relative group transition duration-500"
            style={{
              backgroundImage: `url("https://i.ibb.co.com/6gcR269/pexels-element5-1370298.jpg")`,
              backgroundPosition: "center",
            }}
            data-swiper-parallax="-20%"
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-70 transition-opacity duration-300"></div>

            {/* Content (Text) */}
            <div className="flex flex-col justify-center items-center w-full h-full text-white text-4xl font-bold relative z-10 opacity-100 transition-opacity duration-300 space-y-2 p-4">
              <h2 className="text-white text-2xl lg:text-6xl font-bold mb-4 animate__animated animate__fadeInLeft font-oswald">
                Your Learning Hub
              </h2>
              <p className="text-gray-300 text-xs px-5 lg:text-xl max-w-6xl text-center animate__animated animate__fadeInLeft font-merriweather">
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
