import {
  StyledCategoriesContainer,
  StyledCategoriesTitle,
} from "./index.styles";
import { CardIcon, ICardIcon } from "../../molecules/Card/CardIcon/index";
import { CategoriesData } from "./__mocks__/data";
import { useEffect, useState } from "react";
import axios from "axios";

export interface ICategories {
  categories?: ICardIcon[];
}

export const Categories = (): JSX.Element => {
  const [categories, setCategories] = useState<Array<any>>([])

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
      })
      .catch(function (error:any) {
        console.log(error)
      })
      
  }, [])

  // useEffect(() => {
  //   console.log(categories)
  // }, [categories])
  
  return (
    <>
      <StyledCategoriesTitle>Categoría populares</StyledCategoriesTitle>
      <StyledCategoriesContainer>
        {categories.map(({ nombre, foto_url, id }) => (
          <CardIcon key={`${id}_text`} icon={foto_url} text={nombre} link={`/start/${id}`} />
        ))}
      </StyledCategoriesContainer>
    </>
  );
};
