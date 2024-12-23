import { useLoaderData, useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const BookDetails = () => {
  const [isModalOpen, setisModalOpen] = useState(false);
  const book = useLoaderData();
  const { user } = useAuth();
  const borrowDate = new Date().toISOString().split("T")[0];
  const navigate = useNavigate();
  // console.log(borrowDate);

  const handleBorrow = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const returnDate = form.returnDate.value;

    const borrowedBook = {
      userName: name,
      email,
      borrowDate,
      returnDate,
      bookId: book?._id,
      name: book?.name,
      image: book?.image,
      category: book.category,
    };
    console.log(borrowedBook);

    try {
      await axios
        .post(
          `https://study-shelf-server.vercel.app/borrowedBooks`,
          borrowedBook
        )
        .then(() => {
          // console.log(res.data);
          Swal.fire({
            icon: "success",
            title: "Book Borrowed Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          setisModalOpen(false);
          navigate("/borrowedBooks");
        });
    } catch (err) {
      // console.log(err);
      toast.error(err.response.data);
      setisModalOpen(false);
    }
    // axios
    //   .post(`https://study-shelf-server.vercel.app/borrowedBooks`, borrowedBook)
    //   .then((res) => {
    //     console.log(res.data);
    //     Swal.fire({
    //       icon: "success",
    //       title: "Book Borrowed Successfully",
    //       showConfirmButton: false,
    //       timer: 1500,
    //     });
    //     setisModalOpen(false);
    //   });
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <Helmet>
        <title>Book Details - Study Shelf</title>
      </Helmet>
      <div>
        <h1 className="text-xl lg:text-4xl font-bold text-gray-800 my-6 text-center">
          Check Details of{" "}
          <span className="font-bold text-purple-800">{book?.name}</span>
        </h1>
      </div>
      <div className="p-6 bg-gray-50 rounded-md shadow-md lg:w-8/12 mx-auto mb-6">
        <div>
          <img
            src={book?.image}
            alt={book?.name}
            className="w-full h-96 object-contain rounded-md"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-gray-800 mt-4">
            {book?.name}
          </h1>
          <p className="text-gray-600 mt-1">
            <span className="font-semibold">Author:</span> {book?.authorName}
          </p>
          <p className="text-gray-600 mt-1">
            <span className="font-semibold">Category:</span> {book?.category}
          </p>

          <div className="flex items-center gap-2">
            <p className="font-semibold text-gray-600 mt-1">Rating: </p>
            <div className="flex items-center">
              <ReactStars
                count={5}
                isHalf={true}
                value={Number(book?.rating)}
                edit={false}
                size={24}
                activeColor="#ffd700"
              />
            </div>
            <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              {book?.rating}
            </span>
          </div>

          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Short Description
            </h2>
            <p className="text-gray-600 mt-1">{book?.shortDescription}</p>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-800">Content</h2>
            <p className="text-gray-600 mt-1">{book?.bookContent}</p>
          </div>
          <p className="text-gray-600 mt-4">
            <span className="font-semibold">Quantity:</span> {book?.quantity}
          </p>
        </div>
        <div className="my-4">
          <button
            onClick={() => setisModalOpen(true)}
            disabled={!book?.quantity}
            className="btn text-white bg-purple-600 hover:bg-purple-800 tracking-wide font-oswald"
          >
            Borrow This Book
          </button>
        </div>
      </div>

      {/* modal */}

      <div
        className={`${
          isModalOpen ? " visible" : " invisible"
        } w-full h-screen fixed top-0 left-0 z-50 bg-[#0000002a] transition-all duration-300 flex items-center justify-center font-merriweather`}
      >
        <div
          className={`${
            isModalOpen ? " scale-[1] opacity-100" : " scale-[0] opacity-0"
          } w-[90%] md:w-[80%] lg:w-[35%] bg-[#fff] rounded-lg transition-all duration-300 mx-auto mt-8`}
        >
          <div className="w-full flex items-end p-4 justify-between border-b border-[#d1d1d1]">
            <h1 className="text-[1.5rem] font-bold">
              Fill out the Form to Borrow this Book
            </h1>
            <RxCross1
              className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
              onClick={() => setisModalOpen(false)}
            />
          </div>

          <form onSubmit={handleBorrow} className="flex flex-col gap-5 p-4">
            <div>
              <label
                htmlFor="email"
                className="text-[1rem] font-[500] text-[#464646]"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={user?.email}
                placeholder="email"
                readOnly
                className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full focus:outline-none mt-1 focus:border-[#3B9DF8]"
              />
            </div>

            <div>
              <label
                htmlFor="name"
                className="text-[1rem] font-[500] text-[#464646]"
              >
                User Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={user?.displayName}
                readOnly
                placeholder="User name"
                className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full focus:outline-none mt-1 focus:border-[#3B9DF8]"
              />
            </div>

            <div>
              <label
                htmlFor="returnDate"
                className="text-[1rem] font-[500] text-[#464646]"
              >
                Return Date
              </label>
              <input
                type="date"
                name="returnDate"
                id="returnDate"
                placeholder="Return Date"
                className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full focus:outline-none mt-1 focus:border-[#3B9DF8]"
              />
            </div>

            <button
              type="submit"
              className="btn text-lg w-full bg-purple-700 hover:bg-purple-950 text-[#fff] rounded-md"
            >
              Borrow
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
