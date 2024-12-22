import { Link, useLoaderData, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const CategoryPage = () => {
  const { category } = useParams();
  // console.log(category);
  const books = useLoaderData();
  console.log(books);
  return (
    <div className="my-6 mx-auto w-11/12 font-oswald">
      <div>
        <div className="text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-8">
            Explore Our{" "}
            <span className="font-pacifico text-purple-900">{category}</span>{" "}
            Books
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
                <div className="h-64">
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

                  <p className="my-4 text-gray-500">{book.shortDescription}</p>

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

                <div className="flex items-center justify-between">
                  <Link className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Details
                  </Link>
                  <h5 className="p-2 rounded-md bg-green-100 text-green-700 border border-green-700 font-semibold">
                    Quantity: {book.quantity}
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

export default CategoryPage;
