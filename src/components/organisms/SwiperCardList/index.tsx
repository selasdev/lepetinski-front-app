import React, { useEffect, useState } from 'react'
import { IAnimalCard } from '../../../types/cards'
import { MainContainer, MainTitle } from './index.styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CardAnimal } from '../../molecules/Card/CardAnimal'
import 'swiper/css'
import './index.css'
import axios from 'axios'
import { Skeleton } from '@mui/material'

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
  const [loader, setLoader] = useState<Boolean>(false)

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
        setLoader(true)
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
        {loader 
           ? destacados.map((dest) => (
            <SwiperSlide key={dest.id}>
              <CardAnimal imgSrc={dest.mascota.foto_url} title={dest.mascota.nombre} mainDescription={`${dest.descripcion} ${dest.mascota.edad} años`} altDescription={dest.usuario.ciudad} url={dest.id} />
            </SwiperSlide>
            ))
          : <Skeleton variant="rectangular" sx={{ height: '40vh', borderRadius: '10px' }}/>
        }
      </Swiper>
    </MainContainer>
  )
}
