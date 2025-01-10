import { BiEditAlt } from "react-icons/bi";
import { motion } from "motion/react";
import { MdDelete, MdNumbers } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const CardView = ({ books, refetch }) => {
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure you want to Remove yhis?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://study-shelf-server.vercel.app/allBooks/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              Swal.fire({
                title: "Removed!",
                text: "Your Book has been removed.",
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {books?.map((book) => (
          <div
            key={book._id}
            data-aos="zoom-in"
            className="w-full bg-white border border-gray-200 rounded-lg shadow-xl"
          >
            <div className="relative">
              <img
                className="rounded-t-lg w-full h-60 object-contain"
                src={book.image}
                alt="product image"
              />
              <h5
                className={`badge badge-success absolute top-3 right-2 ${
                  !book.quantity &&
                  "bg-red-100 text-red-700 border border-red-700"
                } bg-green-100 text-green-700 border border-green-700 font-semibold`}
              >
                {book.quantity ? `${book.quantity} Available` : "Out of Stock"}
              </h5>
            </div>

            <div className="px-5 my-4">
              <div className="h-36">
                <h2 className="text-2xl font-semibold tracking-wide text-gray-900">
                  {book.name}
                </h2>

                <h3 className="font-merriweather space-y-3 space-x-2">
                  By <span className="text-purple-600">{book.authorName}</span>{" "}
                  <motion.span
                    animate={{
                      x: [0, 5, 0],
                      scale: [1, 1.05, 1],
                      color: ["#fff ", "#5c097c", "#fff"],
                      backgroundColor: ["#000", "#5c097c"],
                      border: ["#5c097c"],
                    }}
                    transition={{ duration: 3, delay: 1.2, repeat: Infinity }}
                    className="badge badge-accent text-white"
                  >
                    {book.category}
                  </motion.span>
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

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <Link
                    to={`/update-book/${book._id}`}
                    className="btn btn-sm text-white bg-purple-700 hover:bg-purple-800"
                  >
                    <BiEditAlt size={20}></BiEditAlt>
                  </Link>
                  <Link
                    to={`/bookDetails/${book._id}`}
                    className="btn btn-sm btn-outline text-purple-700 hover:bg-purple-800"
                  >
                    <FaInfoCircle size={20}></FaInfoCircle>
                  </Link>
                  <button
                    onClick={() => handleDelete(book._id)}
                    className="btn btn-sm btn-outline text-red-500 hover:bg-red-500 hover:border-red-500"
                  >
                    <MdDelete size={20}></MdDelete>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardView;
