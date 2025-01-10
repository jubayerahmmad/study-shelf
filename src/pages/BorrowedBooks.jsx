import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import noDataAnimation from "../assets/noData.json";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/Loader";

const BorrowedBooks = () => {
  const { user } = useAuth();
  const axiosInstance = useAxiosSecure();
  const {
    data: books = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["borrowed-books", user?.email],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/borrowedBooks/${user?.email}`);
      return data;
    },
  });

  if (isLoading) return <Loader />;

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
            if (data.deletedCount) {
              Swal.fire({
                title: "Returned!",
                text: "Your Book has been returned.",
                icon: "success",
              });
              refetch();
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
        <h2 className="text-3xl lg:text-5xl font-bold">
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
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Borrowed Date</th>
                    <th>Return Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 2 */}
                  {books.map((book, i) => (
                    <tr key={book._id} className="hover">
                      <th>{i + 1}</th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img src={book.image} alt="" book image />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{book.name}</div>
                            <div className="text-sm opacity-50">
                              By {book.author}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{book.borrowDate}</td>
                      <td>{book.returnDate}</td>
                      <td>
                        <button
                          className="btn btn-xs text-white btn-error"
                          onClick={() => handleReturn(book._id)}
                        >
                          Return
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
