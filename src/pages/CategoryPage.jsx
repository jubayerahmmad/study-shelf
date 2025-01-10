import { Link, useLoaderData, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { Helmet } from "react-helmet-async";
import { FaArrowRightLong } from "react-icons/fa6";

const CategoryPage = () => {
  const { category } = useParams();
  const books = useLoaderData();

  return (
    <div className="my-6 mx-auto w-11/12 font-oswald">
      <Helmet>
        <title>{category} - Study Shelf</title>
      </Helmet>
      <div>
        <div className="text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-8">
            Check Our{" "}
            <span className="font-pacifico text-purple-900">{category}</span>{" "}
            Books
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {books?.map((book) => (
            <div
              key={book._id}
              className="w-full bg-white border border-gray-200 rounded-lg shadow"
            >
              <div className="relative">
                <img
                  className="rounded-t-lg w-full h-48 object-contain"
                  src={book.image}
                  alt="product image"
                />
                <h5
                  className={`badge badge-success absolute top-3 right-2 ${
                    !book.quantity &&
                    "bg-red-100 text-red-700 border border-red-700"
                  } bg-green-100 text-green-700 border border-green-700 font-semibold`}
                >
                  {book.quantity
                    ? `${book.quantity} Available`
                    : "Out of Stock"}
                </h5>
              </div>

              <div className="px-5 pb-4">
                <div className="h-28">
                  <h2 className="text-2xl font-semibold tracking-wide text-gray-900">
                    {book.name}
                  </h2>

                  <h3 className="font-merriweather space-y-3 space-x-2">
                    By{" "}
                    <span className="text-purple-600">{book.authorName}</span>{" "}
                    <span className="badge badge-accent text-white">
                      {book.category}
                    </span>
                  </h3>

                  <div className="flex items-center gap-2 mt-2.5 mb-5">
                    <div className="flex items-center">
                      <ReactStars
                        count={5}
                        isHalf={true}
                        value={Number(book.rating)}
                        edit={false}
                        size={24}
                        activeColor="#ffd700"
                      />
                    </div>
                    <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded mt-1">
                      {book.rating}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <Link
                    to={`/bookDetails/${book._id}`}
                    className="text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-lg text-sm px-3 py-2 text-center flex items-center gap-2 group"
                  >
                    View Details{" "}
                    <span className="group-hover:-rotate-45 group-hover:scale-110 duration-200">
                      {" "}
                      <FaArrowRightLong />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
