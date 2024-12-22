import Lottie from "lottie-react";
import updateAnimation from "../assets/update-book-animation.json";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateBooks = () => {
  const navigate = useNavigate();
  const { _id, image, category, name, authorName, rating } = useLoaderData();
  const [categorySelect, setCategorySelect] = useState(category);
  console.log(categorySelect);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image?.value;
    const name = form.name?.value;
    const authorName = form.authorName?.value;
    const rating = form.rating?.value;
    // console.log(image, name, authorName, rating, categorySelect);
    const updatedData = { image, name, authorName, categorySelect, rating };
    axios
      .patch(`http://localhost:5000/allBooks/${_id}`, updatedData)
      .then((res) => {
        console.log(res.data);

        if (res.data.modifiedCount) {
          Swal.fire({
            icon: "success",
            title: "Book Details Updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
          navigate("/allBooks");
        }
      });
  };

  return (
    <div className="max-w-6xl mx-auto border-2 border-purple-950 p-6 m-4">
      <div className="text-center space-y-3">
        <h2 className="text-3xl lg:text-5xl font-semibold">
          Update Books Info
        </h2>
        <p>Update your book details here.</p>
      </div>
      <div className="lg:flex items-center gap-4">
        <div className="lg:w-1/3">
          <Lottie
            animationData={updateAnimation}
            loop={true}
            autoplay={true}
            className="w-full h-96"
          />
        </div>
        <div className="lg:w-2/3 p-6">
          <form onSubmit={handleUpdate} className="w-full mx-auto">
            {/* Image */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="image"
                defaultValue={image}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Book Image
              </label>
            </div>

            {/* Category */}
            <div className="relative z-0 w-full mb-5 group">
              <select
                name="category"
                defaultValue={category}
                onChange={(e) => setCategorySelect(e.target.value)}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 dark:text-gray-900 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
              >
                <option value="Science Fiction">Science Fiction</option>
                <option value="Thriller">Thriller</option>
                <option value="Novel">Novel</option>
                <option value="History">History</option>
              </select>
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Choose Category
              </label>
            </div>

            {/* Book Name */}
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Book Name
                </label>
              </div>

              {/* AuthorName */}
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="authorName"
                  defaultValue={authorName}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Author name
                </label>
              </div>
            </div>

            {/* Rating */}
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group col-span-2">
                <input
                  type="text"
                  name="rating"
                  defaultValue={rating}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Rating
                </label>
              </div>
            </div>

            {/* submit button */}
            <button
              type="submit"
              className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-2 focus:outline-none focus:ring-purple-900 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBooks;
