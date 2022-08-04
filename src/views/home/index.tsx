import React from "react";
import { BackgroundBanner } from "../../components/organisms/BackgroundBanner";
import { Categories } from "../../components/organisms/Categories";
import { Hero } from "../../components/organisms/Hero";
import Navbar from "../../components/organisms/Navbar";
import { useAuthenticationProvider } from "../../contexts/Auth/context";

const HomeView = () => {
  const { authenticated } = useAuthenticationProvider();

  return authenticated ? <LoggedInHome /> : <LoggedOutHome />;
};

export const LoggedOutHome = () => {
  return (
    <React.Fragment>
      <Navbar />
      <BackgroundBanner />
      <Hero />
      <Categories />
    </React.Fragment>
  );
};

export const LoggedInHome = () => {
  return (
    <React.Fragment>
      <Navbar />
      <BackgroundBanner expanded />
      <Categories />
    </React.Fragment>
  );
};

export default HomeView;
