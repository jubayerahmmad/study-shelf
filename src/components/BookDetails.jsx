import { useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const BookDetails = () => {
  const book = useLoaderData();
  console.log(book);
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 my-6">
          Check Details of{" "}
          <span className="font-bold text-purple-800">{book.name}</span>
        </h1>
      </div>
      <div className="p-6 bg-gray-50 rounded-md shadow-md w-8/12 mx-auto gap-6">
        <div>
          <img
            src={book.image}
            alt={book.name}
            className="w-full h-96 object-contain rounded-md"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-gray-800 mt-4">{book.name}</h1>
          <p className="text-gray-600 mt-1">
            <span className="font-semibold">Author:</span> {book.authorName}
          </p>
          <p className="text-gray-600 mt-1">
            <span className="font-semibold">Category:</span> {book.category}
          </p>

          <div className="flex items-center gap-2">
            <p className="font-semibold text-gray-600 mt-1">Rating: </p>
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
            <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              {book.rating}
            </span>
          </div>
          <p className="text-gray-600 mt-4">{book.shortDescription}</p>
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-800">Content</h2>
            <p className="text-gray-600 mt-1">{book.bookContent}</p>
          </div>
          <p className="text-gray-600 mt-4">
            <span className="font-semibold">Quantity:</span> {book.quantity}
          </p>
        </div>
        <div className="my-4">
          <button className="btn text-white bg-purple-600 hover:bg-purple-800 font-bold">
            Borrow This Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
