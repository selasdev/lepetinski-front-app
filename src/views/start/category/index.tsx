import React from "react";
import { useParams } from "react-router";

export const StartCategoryView = (): JSX.Element => {
  const { category } = useParams();

  return <div>StartView</div>;
};
