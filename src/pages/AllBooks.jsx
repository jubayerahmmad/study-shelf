import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import TableView from "../components/TableView";
import CardView from "../components/CardView";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "../components/Loader";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tableView, setTableView] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          "https://study-shelf-server.vercel.app/allBooks"
        );
        setBooks(data);
        setLoading(false);
      } catch (err) {
        toast.error(err?.message);
      }
    };
    getData();
  }, []);

  if (loading) return <Loader />;

  const handleShowAvailable = () => {
    const getAvailableData = async () => {
      try {
        const { data } = await axios.get(
          "https://study-shelf-server.vercel.app/allBooks?available=true"
        );
        setBooks(data);
      } catch (error) {
        toast.error(error?.message);
      }
    };
    getAvailableData();
  };

  return (
    <div className="font-oswald">
      <Helmet>
        <title>All Books - Study Shelf</title>
      </Helmet>
      <div className="text-center bg-gradient-to-tr from-purple-600 via-purple-800 to-purple-900 p-16">
        <h2 className="text-3xl lg:text-5xl text-white font-bold mb-8 animate__animated animate__fadeInDown">
          Explore Our{" "}
          <span className="font-pacifico font-light bg-gradient-to-br from-purple-100 via-purple-200 to-purple-500 bg-clip-text text-transparent">
            Collections
          </span>
        </h2>
      </div>
      <div className="my-6 mx-auto w-10/12">
        <div className="flex gap-2 items-center justify-between lg:justify-center mb-6 animate__animated animate__zoomIn">
          {/* toggle view */}
          <div>
            <select
              className="bg-purple-800 text-white rounded-md p-2"
              onChange={(e) =>
                setTableView(e.target.value === "Table View" && !tableView)
              }
            >
              <option value="Card View">Card View</option>
              <option value="Table View">Table View</option>
            </select>
          </div>

          <div>
            <button
              onClick={handleShowAvailable}
              className={`px-4 py-1.5 text-lg font-medium text-gray-900 border border-purple-900 rounded-lg`}
            >
              Show Available Books
            </button>
          </div>
        </div>

        {tableView ? (
          <TableView books={books} setBooks={setBooks}></TableView>
        ) : (
          <CardView books={books} setBooks={setBooks}></CardView>
        )}
      </div>
    </div>
  );
};

export default AllBooks;
