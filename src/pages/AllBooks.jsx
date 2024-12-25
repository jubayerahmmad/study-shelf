import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import TableView from "../components/TableView";
import CardView from "../components/CardView";
import axios from "axios";
// import { useLoaderData } from "react-router-dom";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [tableView, setTableView] = useState(false);
  // const { totalBooks } = useLoaderData();
  // const itemsPerPage = 8;
  // const numberOfpages = Math.ceil(totalBooks / itemsPerPage);
  // const [currentPage, setCurrentPage] = useState(1);
  // const pages = [...Array(numberOfpages).keys()];

  useEffect(() => {
    axios.get("https://study-shelf-server.vercel.app/allBooks").then((res) => {
      setBooks(res.data);
    });
  }, []);

  const handleShowAvailable = () => {
    axios
      .get("https://study-shelf-server.vercel.app/allBooks?available=true")
      .then((res) => {
        setBooks(res.data);
      });
  };

  // const handlePrevPage = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };
  // const handleNextPage = () => {
  //   if (currentPage < pages.length) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };

  return (
    <div className="my-6 mx-auto w-11/12 font-oswald">
      <Helmet>
        <title>All Books - Study Shelf</title>
      </Helmet>
      <div>
        <div className="text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-8 animate__animated animate__fadeInDown">
            Explore Our{" "}
            <span className="font-pacifico bg-gradient-to-br from-purple-400 via-purple-700 to-purple-950 bg-clip-text text-transparent">
              Collections
            </span>
          </h2>
        </div>

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

      {/* pagination controls : will implement later(after getting the marks)*/}

      {/* <div className="text-center mt-6">
        <button
          onClick={handlePrevPage}
          className={`btn btn-outline bg-purple-300 btn-circle text-purple-800 hover:bg-purple-900 mx-2`}
        >
          <FaArrowLeft></FaArrowLeft>
        </button>
        {pages.map((page) => (
          <button
            onClick={() => setCurrentPage(page + 1)}
            className={`btn btn-outline bg-purple-300 btn-circle text-purple-800 hover:bg-purple-900 ${
              currentPage === page + 1 && "bg-purple-900 text-white"
            } mx-2`}
            key={page}
          >
            {page + 1}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          className={`btn btn-outline bg-purple-300 btn-circle text-purple-800 hover:bg-purple-900 mx-2`}
        >
          <FaArrowRight></FaArrowRight>
        </button>
      </div> */}
    </div>
  );
};

export default AllBooks;
