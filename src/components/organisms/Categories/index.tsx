import {
  StyledCategoriesContainer,
  StyledCategoriesTitle,
} from "./index.styles";
import { CardIcon, ICardIcon } from "../../molecules/Card/CardIcon/index";
import { CategoriesData } from "./__mocks__/data";
import { useEffect, useState } from "react";
import axios from "axios";
import { Skeleton } from "@mui/material";

export interface ICategories {
  categories?: ICardIcon[];
}

export const Categories = (): JSX.Element => {
  const [categories, setCategories] = useState<Array<any>>([])
  const [loader, setLoader] = useState<Boolean>(false)

  useEffect(() => {
    const config = {
      headers: { 
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods' : '*'
      }
    } 
    axios.get('https://t00e9m.deta.dev/tipos', config)
      .then(function (response:any) {
        setCategories( () => [...response.data] )
        setLoader(true)
      })
      .catch(function (error:any) {
        console.log(error)
      })
      
  }, [])
  
  return (
    <>
      <StyledCategoriesTitle>Categoría populares</StyledCategoriesTitle>
      <StyledCategoriesContainer>
        { loader ?
        categories.map(({ nombre, foto_url, id }) => (
          <CardIcon key={`${id}_text`} icon={foto_url} text={nombre} link={`/start/${id}`} />
        ))
          : <Skeleton variant="rectangular" sx={{  gridColumnEnd: '3' ,width: '80vw', height: '40vh', borderRadius: '10px' }}/>
        }
      </StyledCategoriesContainer>
    </>
  );
};
