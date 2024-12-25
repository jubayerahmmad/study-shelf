import axios from "axios";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddBooks = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://study-shelf-server.vercel.app/add-book", data)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "New Book Added Successfully",
          showConfirmButton: false,
          timer: 1500,
        });

        reset();
        navigate("/allBooks");
      });
  };
  return (
    <div className="w-10/12 mx-auto my-6">
      <Helmet>
        <title>Add Books - Study Shelf</title>
      </Helmet>
      {/* FORM */}
      <div
        className="max-w-6xl mx-auto shadow-xl rounded-md p-4 bg-gradient-to-r from-slate-100 via-purple-100 to-slate-200"
        data-aos="zoom-in"
      >
        <div className="text-center space-y-3 my-6">
          <h2 className="text-3xl lg:text-5xl font-semibold bg-gradient-to-br from-purple-400 via-purple-700 to-purple-950 bg-clip-text text-transparent">
            Add New Book
          </h2>
          <p className="text-xs">
            Enter the details of the NEW book you want to add.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full mx-auto font-merriweather"
        >
          {/* Image */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="url"
              {...register("image", { required: true })}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none border-gray-600 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Book Image
            </label>
            {errors.image && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>

          {/* Category */}
          <div className="relative z-0 w-full mb-5 group">
            <select
              {...register("category", { required: true })}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 dark:text-gray-900 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
            >
              <option value="">Choose Category</option>
              <option value="Science Fiction">Science Fiction</option>
              <option value="Thriller">Thriller</option>
              <option value="Novel">Novel</option>
              <option value="History">History</option>
              <option value="Philosophy">Philosophy</option>
              <option value="Poetry">Poetry</option>
              <option value="Drama">Drama</option>
              <option value="Biography">Biography</option>
              <option value="Fantasy">Fantasy</option>
            </select>
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Choose Category
            </label>
            {errors.category && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>

          {/* Book Name */}
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                {...register("name", { required: true })}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none border-gray-600 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Book Name
              </label>
              {errors.name && (
                <span className="text-red-500 text-xs">
                  This field is required
                </span>
              )}
            </div>

            {/* AuthorName */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                {...register("authorName", { required: true })}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none border-gray-600 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Author name
              </label>
              {errors.authorName && (
                <span className="text-red-500 text-xs">
                  This field is required
                </span>
              )}
            </div>
          </div>

          {/* Rating */}
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="number"
                step="any"
                {...register("rating", { required: true })}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none border-gray-600 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Rating
              </label>
              {errors.rating && (
                <span className="text-red-500 text-xs">
                  This field is required
                </span>
              )}
            </div>

            {/* Quantity */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="number"
                {...register("quantity", { required: true })}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none border-gray-600 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Quantity
              </label>
              {errors.quantity && (
                <span className="text-red-500 text-xs">
                  This field is required
                </span>
              )}
            </div>
          </div>

          {/* Short Description */}
          <div className="relative z-0 w-full mb-5 group">
            <textarea
              type="text"
              {...register("shortDescription", { required: true })}
              rows={4}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none border-gray-600 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Short Description
            </label>
            {errors.shortDescription && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>

          {/* Book Content */}
          <div className="relative z-0 w-full mb-5 group">
            <textarea
              type="text"
              {...register("bookContent", { required: true })}
              rows={6}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none border-gray-600 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Book Content
            </label>
            {errors.bookContent && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
          </div>

          {/* submit button */}
          <button
            type="submit"
            className="btn text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-lg text-center font-merriweather"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBooks;
