import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet-async";

const BorrowedBooks = () => {
  const { user } = useAuth();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(`https://study-shelf-server.vercel.app/borrowedBooks/${user?.email}`)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      });
  }, [user?.email]);

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
        {books.map((book) => (
          <div
            key={book._id}
            className="card items-center lg:card-side bg-base-100 shadow-xl "
          >
            <figure>
              <img
                className="h-48 w-56 object-contain p-6"
                src={book.image}
                alt="bookImage"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{book.name}</h2>

              <div className="lg:flex items-center gap-4 space-y-4 lg:space-y-0">
                <p className="text-gray-700">Borrowed on: {book.borrowDate}</p>
                <p className="text-gray-700">Return Date: {book.returnDate}</p>
                <button className="btn bg-purple-700 hover:bg-purple-950 text-white font-merriweather">
                  Return
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BorrowedBooks;
