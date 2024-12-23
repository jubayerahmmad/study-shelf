import { BiEditAlt } from "react-icons/bi";
import { FaInfoCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const TableView = ({ books }) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Book Info</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {books.map((book) => (
              <tr key={book._id}>
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
                    <button className="btn btn-sm btn-outline text-red-500 hover:bg-red-500 hover:border-red-500">
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
