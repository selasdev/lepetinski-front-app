import React from "react";
import { IAnimalCard } from "../../../types/cards";
import { MainContainer, MainTitle } from "./index.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { CardAnimal } from "../../molecules/Card/CardAnimal";

interface ISwiperCardList {
  title?: string;
  highlight?: string;
  cards?: IAnimalCard[];
}

const breakpoints = {
  1: {
    slidesPerView: 1.5,
  },
  768: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 3,
  },
};

export const SwiperCardList = ({
  title,
  highlight,
  cards,
}: ISwiperCardList): JSX.Element => {
  return (
    <MainContainer>
      <MainTitle>
        {title}
        {highlight ? (
          <span>{` ${highlight}`}</span>
        ) : (
          <React.Fragment></React.Fragment>
        )}
      </MainTitle>

      <Swiper slidesPerView={1.5} spaceBetween={16} breakpoints={breakpoints}>
        {cards &&
          cards.map((card, index) => (
            <SwiperSlide>
              <CardAnimal key={card.title + "-" + index} {...card} />
            </SwiperSlide>
          ))}
      </Swiper>
    </MainContainer>
  );
};
