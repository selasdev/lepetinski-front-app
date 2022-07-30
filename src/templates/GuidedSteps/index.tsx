import React from "react";
import { useNavigate } from "react-router";
import { Button } from "@mui/material";
import Navbar from "../../components/organisms/Navbar";
import { MainContainer, MainStartContainer } from "./index.styles";

interface IGuidedStepsTemplate {
  children: React.ReactNode;
}

export const GuidedStepsTemplate = ({
  children,
}: IGuidedStepsTemplate): JSX.Element => {
  const navigate = useNavigate();

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
        <MainContainer>{children}</MainContainer>
      </MainStartContainer>
    </React.Fragment>
  );
};
