import { motion } from "motion/react";
import { Link } from "react-router-dom";
import missionImg from "../../assets/icons8-mission-64.png";
import visionImg from "../../assets/icons8-target-50.png";
import recommendationImg from "../../assets/icons8-recommended-64.png";
import uiImg from "../../assets/icons8-web-design-48.png";
import collectionImg from "../../assets/icons8-book-64.png";

const AboutUs = () => {
  return (
    <section className="py-16 px-6 bg-slate-100 bg-opacity-50">
      <div className="text-center space-y-2 my-6">
        <h1 className="text-4xl lg:text-6xl font-oswald font-bold">
          Welcome to{" "}
          <span className="bg-gradient-to-br from-purple-400 via-purple-700 to-purple-950 bg-clip-text text-transparent font-pacifico">
            Study Shelf
          </span>
        </h1>
        <p className="text-lg">Empowering Readers to Explore Knowledge</p>
      </div>

      {/* Mission & Vision Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{
            filter: "drop-shadow(0px 10px 15px rgba(125,26,153,0.25))",
          }}
          whileHover={{
            filter: "drop-shadow(5px 20px 15px rgba(125,26,153,0.65))",
          }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
          className="flex items-center justify-center p-6 bg-white rounded-lg"
          data-aos="fade-right"
        >
          <div className="space-y-4">
            <img className="w-16" src={missionImg} alt="mission" />
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600">
              To provide a seamless platform for book lovers to find, borrow,
              and explore the world of literature.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{
            filter: "drop-shadow(0px 10px 15px rgba(125,26,153,0.25))",
          }}
          whileHover={{
            filter: "drop-shadow(5px 20px 15px rgba(125,26,153,0.65))",
          }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
          className="flex items-center justify-center p-6 bg-white rounded-lg"
          data-aos="fade-left"
        >
          <div className="space-y-4">
            <img className="w-16" src={visionImg} alt="vision" />
            <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
            <p className="text-lg text-gray-600">
              To create a community where readers can access the knowledge and
              stories that shape the future.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{
            filter: "drop-shadow(0px 10px 15px rgba(125,26,153,0.25))",
          }}
          whileHover={{
            filter: "drop-shadow(5px 20px 15px rgba(125,26,153,0.65))",
          }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
          className="card bg-white text-black rounded-lg  p-6"
          data-aos="fade-right"
        >
          <div className="space-y-4">
            <img className="w-16" src={collectionImg} alt="collection" />
            <h3 className="text-2xl font-semibold mb-4">
              Extensive Collection
            </h3>
            <p className="text-lg text-gray-600">
              Over 10,000 books across various categories available for easy
              borrowing.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{
            filter: "drop-shadow(0px 10px 15px rgba(125,26,153,0.25))",
          }}
          whileHover={{
            filter: "drop-shadow(5px 20px 15px rgba(125,26,153,0.65))",
          }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
          className="card bg-white text-black rounded-lg  p-6"
          data-aos="zoom-in"
        >
          <div className="space-y-4">
            <img className="w-16" src={uiImg} alt="design" />
            <h3 className="text-2xl font-semibold mb-4">
              User-Friendly Interface
            </h3>
            <p className="text-lg text-gray-600">
              A seamless experience with easy-to-use search and navigation
              features.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{
            filter: "drop-shadow(0px 10px 15px rgba(125,26,153,0.25))",
          }}
          whileHover={{
            filter: "drop-shadow(5px 20px 15px rgba(125,26,153,0.65))",
          }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
          className="card bg-white text-black rounded-lg  p-6"
          data-aos="fade-left"
        >
          <div className="space-y-4">
            <img
              className="w-16"
              src={recommendationImg}
              alt="recommendation"
            />
            <h3 className="text-2xl font-semibold mb-4">
              Book Recommendations
            </h3>
            <p className="text-lg text-gray-600">
              Get personalized book suggestions based on your reading
              preferences.
            </p>
          </div>
        </motion.div>
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
