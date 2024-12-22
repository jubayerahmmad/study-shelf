import React from "react";
import Banner from "./Banner";
import BookCategories from "./BookCategories";
import Faqs from "./Faqs";
import AboutUs from "./AboutUs";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Study Shelf</title>
      </Helmet>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <BookCategories></BookCategories>
      <Faqs></Faqs>
    </div>
  );
};

export default Home;
