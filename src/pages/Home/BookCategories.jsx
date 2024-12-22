import { Link } from "react-router-dom";

const BookCategories = () => {
  const categories = [
    {
      category: "Science Fiction",
      img: "https://i.ibb.co.com/DpRnvgB/sci-fi.png",
      id: "science-fiction",
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
  ];
  return (
    <div className="max-w-7xl mx-auto my-6 p-4">
      <div className="text-center my-6 space-y-3">
        <h1 className="text-4xl lg:text-6xl font-oswald font-bold">
          Book Categories
        </h1>
        <p className="text-lg text-gray-600 font-merriweather">
          Explore a wide range of book categories. From timeless classics to
          modern bestsellers, we have something for every book lover.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {categories.map((category) => (
          <Link key={category.id} to={`/category/${category.category}`}>
            <div className="bg-white rounded-md shadow-md relative hover:scale-105 transition duration-500">
              <img
                src={category.img}
                alt="image"
                className="w-full h-[250px] object-cover rounded-t-md"
              />

              <div className="p-3">
                <h1 className="text-2xl font-bold text-black leading-[24px] mt-1.5 font-oswald">
                  {category.category}
                </h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BookCategories;
