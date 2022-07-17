import React from "react";
import BackgroundBanner from "../../components/organisms/BackgroundBanner";
import Categories from "../../components/organisms/Categories";
import Hero from "../../components/organisms/Hero";
import Navbar from "../../components/organisms/Navbar";

const USER_LOGGED_IN = false;

const HomeView = () => {
  return (
    <React.Fragment>
      <Navbar />
      <BackgroundBanner />
      {!USER_LOGGED_IN ? <Hero /> : null}
      <Categories />
    </React.Fragment>
  );
};

export default HomeView;
