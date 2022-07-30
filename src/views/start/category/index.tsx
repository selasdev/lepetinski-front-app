import React from "react";
import Navbar from "../../../components/organisms/Navbar";
import { MainStartContainer } from "../index.styles";
import { useNavigate, useParams } from "react-router";
import { Button } from "@mui/material";

export const StartCategoryView = (): JSX.Element => {
  const navigate = useNavigate();
  const { category } = useParams();

  return (
    <React.Fragment>
      <Navbar />
      <MainStartContainer>
        <Button
          variant="text"
          color="primary"
          onClick={() => {
            navigate(-1);
          }}
        >
          VOLVER
        </Button>
        {category}
      </MainStartContainer>
    </React.Fragment>
  );
};
