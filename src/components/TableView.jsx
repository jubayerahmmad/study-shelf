import axios from "axios";
import { BiEditAlt } from "react-icons/bi";
import { FaInfoCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const TableView = ({ books }) => {
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
              const remaining = books.filter((book) => book._id !== id);
              setBooks(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table bg-purple-100 bg-opacity-80 backdrop-blur-sm">
          {/* head */}
          <thead>
            <tr data-aos="zoom-in-right">
              <th>Book Info</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {books.map((book) => (
              <tr key={book._id} data-aos="zoom-in">
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={book.image} alt="bookImage" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold lg:text-xl">{book.name}</div>
                      <div className="text-sm opacity-50">
                        By {book.authorName}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="text-xs">{book.category}</p>
                </td>
                <td className="lg:text-xl">{book.quantity}</td>
                <td>
                  <div className="flex items-center gap-2">
                    <Link
                      to={`/update-book/${book._id}`}
                      className="btn btn-sm text-white bg-purple-700 hover:bg-purple-800"
                    >
                      <BiEditAlt></BiEditAlt>
                    </Link>
                    <Link
                      to={`/bookDetails/${book._id}`}
                      className="btn btn-sm btn-outline text-purple-700 hover:bg-purple-800"
                    >
                      <FaInfoCircle></FaInfoCircle>
                    </Link>
                    <button
                      onClick={() => handleDelete(book._id)}
                      className="btn btn-sm btn-outline text-red-500 hover:bg-red-500 hover:border-red-500"
                    >
                      <MdDelete></MdDelete>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableView;
