import React from "react";
import { BackgroundBanner } from "../../components/organisms/BackgroundBanner";
import { Categories } from "../../components/organisms/Categories";
import { Hero } from "../../components/organisms/Hero";
import Navbar from "../../components/organisms/Navbar";
import { SwiperCardList } from "../../components/organisms/SwiperCardList";
import { useAuthenticationProvider } from "../../contexts/Auth/context";
import { AnimalCardsMocks } from "./__mocks__/data";

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
      <SwiperCardList
        title="Mascotas"
        highlight="destacadas"
        cards={AnimalCardsMocks}
      />
      <SwiperCardList title="Busquedas recientes" cards={AnimalCardsMocks} />
    </React.Fragment>
  );
};

export default HomeView;
