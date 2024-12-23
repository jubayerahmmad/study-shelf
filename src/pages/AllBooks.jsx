import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import TableView from "../components/TableView";
import CardView from "../components/CardView";

const AllBooks = () => {
  const books = useLoaderData();
  const [tableView, setTableView] = useState(false);

  return (
    <div className="my-6 mx-auto w-11/12 font-oswald">
      <Helmet>
        <title>All Books - Study Shelf</title>
      </Helmet>
      <div>
        <div className="text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-8">
            Explore Our{" "}
            <span className="font-pacifico bg-gradient-to-br from-purple-400 via-purple-700 to-purple-950 bg-clip-text text-transparent">
              Collections
            </span>
          </h2>

          {/* toggle view */}
          <div className="inline-flex rounded-md shadow-sm mb-6" role="group">
            <button
              onClick={() => setTableView(false)}
              className={`px-4 py-2 text-sm lg:text-lg font-medium text-gray-900 border border-purple-900 rounded-s-lg ${
                tableView ? undefined : "bg-purple-900 text-white"
              }`}
            >
              Card View
            </button>

            <button
              onClick={() => setTableView(true)}
              className={`px-4 py-2 text-sm lg:text-lg font-medium text-gray-900 border border-gray-900 rounded-e-lg ${
                tableView ? "bg-purple-900 text-white" : undefined
              }`}
            >
              Table View
            </button>
          </div>
        </div>

        {/* Dropdown filter */}

        {tableView ? (
          <TableView books={books}></TableView>
        ) : (
          <CardView books={books}></CardView>
        )}
      </div>
    </div>
  );
};

export default AllBooks;
