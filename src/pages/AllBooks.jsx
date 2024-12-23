import { Link, useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { Helmet } from "react-helmet-async";
import { BiEditAlt } from "react-icons/bi";
import { MdDelete, MdNumbers } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";

const AllBooks = () => {
  const books = useLoaderData();
  // console.log(books);
  return (
    <div className="my-6 mx-auto w-11/12 font-oswald">
      <Helmet>
        <title>All Books - Study Shelf</title>
      </Helmet>
      <div>
        <div className="text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-8">
            Explore Our{" "}
            <span className="font-pacifico bg-gradient-to-br from-purple-400 via-purple-700 to-purple-950 bg-clip-text text-transparent">
              Collections
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
          {books?.map((book) => (
            <div
              key={book._id}
              className="w-full bg-white border border-gray-200 rounded-lg shadow"
            >
              <img
                className="rounded-t-lg w-full h-96 object-contain"
                src={book.image}
                alt="product image"
              />

              <div className="px-5 pb-5 my-4">
                <div className="h-36">
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

                <div className="flex items-center justify-between my-4">
                  <div className="flex items-center gap-2">
                    <Link
                      to={`/update-book/${book._id}`}
                      className="btn text-white h bg-purple-700 hover:bg-purple-800"
                    >
                      <BiEditAlt size={20}></BiEditAlt>
                    </Link>
                    <Link
                      to={`/bookDetails/${book._id}`}
                      className="btn btn-outline text-purple-700 hover:bg-purple-800"
                    >
                      <FaInfoCircle size={20}></FaInfoCircle>
                    </Link>
                    <button className="btn btn-outline text-red-500 hover:bg-red-500 hover:border-red-500">
                      <MdDelete size={20}></MdDelete>
                    </button>
                  </div>
                  <h5 className="p-2 rounded-md bg-green-100 text-green-700 border border-green-700 font-semibold font-sans flex items-center gap-1">
                    <MdNumbers></MdNumbers> <span>{book.quantity}</span>
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
