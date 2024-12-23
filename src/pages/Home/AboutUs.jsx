import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-t from-slate-50 to-gray-200">
      <div className="text-center space-y-2 my-6">
        <h1 className="text-4xl lg:text-6xl font-oswald font-bold">
          Welcome to{" "}
          <span className="bg-gradient-to-br from-purple-400 via-purple-700 to-purple-950 bg-clip-text text-transparent">
            Study Shelf
          </span>
        </h1>
        <p className="text-lg">Empowering Readers to Explore Knowledge</p>
      </div>

      {/* Mission & Vision Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-lg">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600">
              To provide a seamless platform for book lovers to find, borrow,
              and explore the world of literature.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-lg">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
            <p className="text-lg text-gray-600">
              To create a community where readers can access the knowledge and
              stories that shape the future.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="card shadow-lg bg-white text-black rounded-lg text-center p-6">
          <h3 className="text-2xl font-semibold mb-4">Extensive Collection</h3>
          <p className="text-lg text-gray-600">
            Over 10,000 books across various categories available for easy
            borrowing.
          </p>
        </div>
        <div className="card shadow-lg bg-white text-black rounded-lg text-center p-6">
          <h3 className="text-2xl font-semibold mb-4">
            User-Friendly Interface
          </h3>
          <p className="text-lg text-gray-600">
            A seamless experience with easy-to-use search and navigation
            features.
          </p>
        </div>
        <div className="card shadow-lg bg-white text-black rounded-lg text-center p-6">
          <h3 className="text-2xl font-semibold mb-4">Book Recommendations</h3>
          <p className="text-lg text-gray-600">
            Get personalized book suggestions based on your reading preferences.
          </p>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="text-center mt-12">
        <Link to="/allBooks">
          <button className="btn btn-outline text-purple-800 hover:bg-purple-800 text-xl rounded-lg font-oswald">
            Explore Books
          </button>
        </Link>
      </div>
    </section>
  );
};

export default AboutUs;
