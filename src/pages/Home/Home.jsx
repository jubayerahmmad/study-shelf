import React from "react";
import Banner from "./Banner";
import BookCategories from "./BookCategories";
import Faqs from "./Faqs";
import AboutUs from "./AboutUs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <BookCategories></BookCategories>
      <Faqs></Faqs>
    </div>
  );
};

export default Home;
