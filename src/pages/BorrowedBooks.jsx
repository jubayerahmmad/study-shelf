import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import noDataAnimation from "../assets/noData.json";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const BorrowedBooks = () => {
  const { user, logoutUser } = useAuth();
  const [books, setBooks] = useState([]);
  // console.log(books);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/borrowedBooks/cucu@cubarsi.com`, {
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => {
        // console.log(err);
        toast.error(err.response.data);
        logoutUser();
      });
  }, [user?.email]);

  const handleReturn = (id) => {
    Swal.fire({
      title: "Are you sure you want to return This?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://study-shelf-server.vercel.app/borrowedBooks/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Returned!",
                text: "Your Book has been returned.",
                icon: "success",
              });
              const remaining = books.filter((book) => book._id !== id);
              setBooks(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Borrowed Books - Study Shelf</title>
      </Helmet>
      <div className="text-center my-4">
        <h2 className="text-4xl font-bold">
          Books Borrowed by{" "}
          <span className="bg-gradient-to-br from-purple-400 via-purple-700 to-purple-950 bg-clip-text text-transparent">
            {user.displayName}
          </span>
        </h2>
      </div>
      {/* card */}
      <div className="max-w-6xl mx-auto space-y-6 my-6 p-6">
        {books.length > 0 ? (
          <>
            {books.map((book) => (
              <div
                key={book._id}
                className="card items-center lg:card-side bg-base-100 shadow-xl border border-purple-200"
              >
                <figure>
                  <img
                    className="h-32 w-56 object-contain p-4"
                    src={book.image}
                    alt="bookImage"
                  />
                </figure>
                <div className="card-body w-full">
                  <h2 className="card-title">
                    {book.name}{" "}
                    <span className="badge badge-accent badge-lg">
                      {book.category}
                    </span>
                  </h2>

                  <div className="lg:flex items-center gap-4 space-y-4 lg:space-y-0">
                    <p className="text-gray-700">
                      Borrowed on:{" "}
                      <span className="font-oswald tracking-wider">
                        {book.borrowDate}
                      </span>
                    </p>
                    <p className="text-gray-700">
                      Return Date:{" "}
                      <span className="font-oswald tracking-wider">
                        {book.returnDate}
                      </span>
                    </p>
                    <button
                      onClick={() => handleReturn(book?._id)}
                      className="btn btn-outline text-red-500 hover:bg-red-500 font-merriweather hover:border-red-500"
                    >
                      Return
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center my-6 space-y-6">
            <Lottie
              animationData={noDataAnimation}
              autoplay={true}
              className="h-96"
            />
            <h2 className="text-4xl text-center p-2 font-bold">
              You didn't Borrow any Books Yet!
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default BorrowedBooks;
