import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { GuidedStepsTemplate } from "../../../templates/GuidedSteps";
import { SecondaryHeader } from "../index.styles";
import { CardText } from "../../../components/molecules/Card/CardText";
import { Grid, Skeleton } from "@mui/material";
import axios from "axios";

const StartRacesView = (): JSX.Element => {
  const { category } = useParams();

  const [races, setRaces] = useState<Array<any>>([])
  const [loader, setLoader] = useState<Boolean>(false)

  useEffect(() => {
    const config = {
      headers: { 
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods' : '*'
      }
    } 
    axios.get('https://t00e9m.deta.dev/razas/'+category, config)
      .then(function (response:any) {
        setRaces( () => [...response.data] )
        setLoader(true)
      })
      .catch(function (error:any) {
        console.log(error)
      })
      
  },[category])

  return (
    <GuidedStepsTemplate>
      <SecondaryHeader>¿Pensabas en alguna raza específica?</SecondaryHeader>
      <Grid container spacing={4}>
        {loader
          ? races.map(({ nombre, id }) => (
            <Grid item xs={6} sm={3} md={4} lg={4} key={id}>
              <CardText key={`${id}_text`} link={`/start/${category}/${id}`} text={nombre} />
            </Grid>
          ))
          : <Skeleton variant="rectangular" sx={{  width: '100%', height: '40vh', borderRadius: '10px' }}/>
        }
      </Grid>
    </GuidedStepsTemplate>
  );
};

export default StartRacesView;
