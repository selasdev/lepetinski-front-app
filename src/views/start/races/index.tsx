import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { GuidedStepsTemplate } from "../../../templates/GuidedSteps";
import { SecondaryHeader } from "../index.styles";
import { CardText } from "../../../components/molecules/Card/CardText";
import { MockCardTextRaces } from "../../../components/molecules/Card/CardText/__mocks__/data";
import { Grid } from "@mui/material";
import axios from "axios";

const StartRacesView = (): JSX.Element => {
  const { category } = useParams();

  const [races, setRaces] = useState<Array<any>>([])

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
      })
      .catch(function (error:any) {
        console.log(error)
      })
      
  }, [])

  return (
    <GuidedStepsTemplate>
      <SecondaryHeader>¿Pensabas en alguna raza específica?</SecondaryHeader>
      <Grid container spacing={4}>
        {races.map(({ nombre, id }) => (
          <Grid item xs={6} sm={3} md={4} lg={4}>
            <CardText key={`${id}_text`} link={`/start/${category}/${id}`} text={nombre} />
          </Grid>
        ))}
      </Grid>
    </GuidedStepsTemplate>
  );
};

export default StartRacesView;
