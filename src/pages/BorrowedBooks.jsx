import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import noDataAnimation from "../assets/noData.json";
import { Link } from "react-router-dom";

const BorrowedBooks = () => {
  const { user } = useAuth();
  const [books, setBooks] = useState([]);
  console.log(books);

  useEffect(() => {
    axios
      .get(`https://study-shelf-server.vercel.app/borrowedBooks/${user?.email}`)
      .then((res) => {
        // console.log(res.data);
        setBooks(res.data);
      });
  }, [user?.email]);

  const handleReturn = (id) => {
    console.log(id);
  };

  return (
    <div>
      <Helmet>
        <title>Borrowed Books - Study Shelf</title>
      </Helmet>
      <div className="text-center my-4">
        <h2 className="text-4xl">
          Books Borrowed by{" "}
          <span className="text-purple-700">{user.displayName}</span>
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
                <div className="card-body">
                  <h2 className="card-title">{book.name}</h2>

                  <div className="lg:flex items-center gap-4 space-y-4 lg:space-y-0">
                    <p className="text-gray-700">
                      Borrowed on: {book.borrowDate}
                    </p>
                    <p className="text-gray-700">
                      Return Date: {book.returnDate}
                    </p>
                    <button
                      onClick={() => handleReturn(book._id)}
                      className="btn bg-purple-700 hover:bg-purple-950 text-white font-merriweather"
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
