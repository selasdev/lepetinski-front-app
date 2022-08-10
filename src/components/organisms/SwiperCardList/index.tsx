import React, { useEffect, useState } from 'react'
import { IAnimalCard } from '../../../types/cards'
import { MainContainer, MainTitle } from './index.styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CardAnimal } from '../../molecules/Card/CardAnimal'
import 'swiper/css'
import './index.css'
import axios from 'axios'

interface ISwiperCardList {
  title?: string
  highlight?: string
  cards?: IAnimalCard[]
}

const breakpoints = {
  1: {
    slidesPerView: 1.4
  },
  768: {
    slidesPerView: 2
  },
  1024: {
    slidesPerView: 3
  }
}

export const SwiperCardList = ({ title, highlight, cards }: ISwiperCardList): JSX.Element => {

  const [destacados, setDestacados] = useState<Array<any>>([])

  useEffect(() => {
    const config = {
      headers: { 
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods' : '*'
      }
    } 
    axios.get('https://t00e9m.deta.dev/destacados', config)
      .then(function (response:any) {
        setDestacados( () => [...response.data] )
      })
      .catch(function (error:any) {
        console.log(error)
      })
  }, [])

  return (
    <MainContainer>
      <MainTitle>
        {title}
        {highlight ? <span>{` ${highlight}`}</span> : <React.Fragment></React.Fragment>}
      </MainTitle>

      <Swiper
        grabCursor
        simulateTouch
        noSwiping={false}
        slidesPerView={1.4}
        spaceBetween={16}
        breakpoints={breakpoints}
      >
        {destacados &&
          destacados.map((dest) => (
            <SwiperSlide key={dest.id}>
              <CardAnimal imgSrc={'https://www.bunko.pet/__export/1618340921377/sites/debate/img/2021/04/13/beagle-pequexo-parado_crop1618340487400.jpg_581755604.jpg'} title={'bolt'} mainDescription={dest.descripcion} altDescription={dest.celular_contacto} url={'1'} />
            </SwiperSlide>
          ))}
      </Swiper>
    </MainContainer>
  )
}
