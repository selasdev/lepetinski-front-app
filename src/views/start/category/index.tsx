import React from "react";
import { useParams } from "react-router";
import { GuidedStepsTemplate } from "../../../templates/GuidedSteps";
import { SecondaryHeader } from "../index.styles";

export const StartCategoryView = (): JSX.Element => {
  const { category } = useParams();

  return (
    <GuidedStepsTemplate>
      <SecondaryHeader>¿Pensabas en alguna raza específica?</SecondaryHeader>
      {category}
    </GuidedStepsTemplate>
  );
};
