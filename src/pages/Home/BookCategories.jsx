import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const BookCategories = () => {
  const categories = [
    {
      category: "Science Fiction",
      img: "https://i.ibb.co.com/DpRnvgB/sci-fi.png",
      id: "science-fiction",
    },
    {
      category: "Biography",
      img: "https://i.ibb.co.com/8bd1DsP/Historical-Biography.jpg",
      id: "biography",
    },
    {
      category: "Novel",
      img: "https://i.ibb.co.com/1bgV0BL/novel.jpg",
      id: "novel",
    },
    {
      category: "Thriller",
      img: "https://i.ibb.co.com/VHbNDFK/thriller.jpg",
      id: "thriller",
    },
    {
      category: "History",
      img: "https://i.ibb.co.com/kGHkw9L/history.webp",
      id: "history",
    },
    {
      category: "Poetry",
      img: "https://i.ibb.co.com/fDH09TP/poetry.jpg",
      id: "poetry",
    },
    {
      category: "Fantasy",
      img: "https://i.ibb.co.com/dtNqH0S/fantasy.jpg",
      id: "fantasy",
    },
    {
      category: "Philosophy",
      img: "https://i.ibb.co.com/C2YbvJJ/philosophy.jpg",
      id: "philosophy",
    },
    {
      category: "Drama",
      img: "https://i.ibb.co.com/rxgvKtz/drama.jpg",
      id: "drama",
    },
  ];
  return (
    <div className="my-6">
      <div className="text-center my-6 space-y-3">
        <h1 className="text-4xl lg:text-6xl font-oswald font-bold bg-gradient-to-br from-purple-400 via-purple-700 to-purple-950 bg-clip-text text-transparent">
          Book Categories
        </h1>
        <p className="text-xs lg:text-lg text-gray-600 font-merriweather">
          Explore a wide range of book categories. From timeless classics to
          modern bestsellers, we have something for every book lover.
        </p>
      </div>
      <div className="my-4">
        <Marquee gradient={true} gradientWidth={60} pauseOnHover={true}>
          {categories.map((category) => (
            <Link key={category.id} to={`/category/${category.category}`}>
              <motion.div
                initial={{
                  filter: "drop-shadow(0px 10px 15px rgba(125,26,153,0.25))",
                }}
                whileHover={{
                  filter: "drop-shadow(5px 20px 15px rgba(125,26,153,0.65))",
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeInOut",
                }}
                className="rounded-md shadow-md transition duration-500 mx-6 my-12 bg-purple-50 hover:scale-105"
              >
                <img
                  src={category.img}
                  alt="image"
                  className="w-full h-32 lg:h-[250px] object-cover rounded-t-md"
                />

                <div className="p-3">
                  <h1 className="text-2xl font-bold text-black leading-[24px] mt-1.5 font-oswald">
                    {category.category}
                  </h1>
                </div>
              </motion.div>
            </Link>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default BookCategories;
