import React from "react";
import { useParams } from "react-router";
import { GuidedStepsTemplate } from "../../../templates/GuidedSteps";

export const StartCategoryView = (): JSX.Element => {
  const { category } = useParams();

  return (
    <GuidedStepsTemplate>StartCategoryView {category}</GuidedStepsTemplate>
  );
};
