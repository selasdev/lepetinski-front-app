import React from "react";
import { useParams } from "react-router";
import { GuidedStepsTemplate } from "../../../templates/GuidedSteps";
import { SecondaryHeader } from "../index.styles";
import { CardText } from "../../../components/molecules/Card/CardText";
import { MockCardTextSizes } from "../../../components/molecules/Card/CardText/__mocks__/data";
import { Grid } from "@mui/material";

export const StartSizeView = (): JSX.Element => {
  const { category, race } = useParams();

  return (
    <GuidedStepsTemplate>
      <SecondaryHeader>¿Qué tan grande es tu compañero?</SecondaryHeader>
      <Grid container spacing={4}>
        {MockCardTextSizes.map(({ text, link }, index) => (
          <Grid item xs={6} sm={3} md={4} lg={4}>
            <CardText key={`${index}_text`} link={link} text={text} />
          </Grid>
        ))}
      </Grid>
    </GuidedStepsTemplate>
  );
};
