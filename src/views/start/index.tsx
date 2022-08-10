import { Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { CardIcon } from "../../components/molecules/Card/CardIcon";
import { Categories } from "../../components/organisms/Categories";
import { CategoriesData } from "../../components/organisms/Categories/__mocks__/data";
import { GuidedStepsTemplate } from "../../templates/GuidedSteps";
import { MainHeader, SecondaryHeader } from "./index.styles";

const StartView = (): JSX.Element => {
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

  return (
    <GuidedStepsTemplate>
      <MainHeader>Nos alegra iniciar la búsqueda de tu compañero</MainHeader>
      <SecondaryHeader>¿Qué estás buscando?</SecondaryHeader>
      <Grid container spacing={4}>
        {categories.map(({ foto_url, nombre, id }) => (
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <CardIcon
              key={`${id}_text`}
              icon={foto_url}
              text={nombre}
              link={`/start/${id}`}
            />
          </Grid>
        ))}
      </Grid>
    </GuidedStepsTemplate>
  );
};

export default StartView;
