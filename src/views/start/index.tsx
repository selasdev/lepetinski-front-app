import React from "react";
import Navbar from "../../components/organisms/Navbar";
import { MainStartContainer } from "./index.styles";
import { useNavigate } from "react-router";
import { Button } from "@mui/material";

export const StartView = (): JSX.Element => {
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
      </MainStartContainer>
    </React.Fragment>
  );
};
