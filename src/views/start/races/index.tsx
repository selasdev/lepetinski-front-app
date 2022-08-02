import React from "react";
import { useParams } from "react-router";
import { GuidedStepsTemplate } from "../../../templates/GuidedSteps";
import { SecondaryHeader } from "../index.styles";
import { CardText } from "../../../components/molecules/Card/CardText";
import { MockCardTextRaces } from "../../../components/molecules/Card/CardText/__mocks__/data";
import { Grid } from "@mui/material";

const StartRacesView = (): JSX.Element => {
  const { category } = useParams();

  console.log(category);

  return (
    <GuidedStepsTemplate>
      <SecondaryHeader>¿Pensabas en alguna raza específica?</SecondaryHeader>
      <Grid container spacing={4}>
        {MockCardTextRaces.map(({ text, link }, index) => (
          <Grid item xs={6} sm={3} md={4} lg={4}>
            <CardText key={`${index}_text`} link={link} text={text} />
          </Grid>
        ))}
      </Grid>
    </GuidedStepsTemplate>
  );
};

export default StartRacesView;
