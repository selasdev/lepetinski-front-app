import { Button } from "@mui/material";
import React from "react";
import {
  StyledBannerImage,
  StyledBannerContainer,
  StyledBannerContentContainer,
  StyledOverlay,
  StyledBannerTitle,
  StyledExpandedBannerTitle,
  StyledMultipleButtonsContainer,
} from "./index.styles";
interface IBackgroundBanner {
  expanded?: boolean;
}

export const BackgroundBanner = ({
  expanded = false,
}: IBackgroundBanner): JSX.Element => {
  return (
    <StyledBannerContainer>
      <StyledBannerImage
        showAlways={!expanded}
        src="/assets/images/banner.png"
        alt="banner"
      />
      <StyledBannerContentContainer>
        {expanded ? (
          <StyledExpandedBannerTitle>
            ¿Qué quieres hacer <span>hoy?</span>
          </StyledExpandedBannerTitle>
        ) : (
          <StyledBannerTitle>
            Tu nuevo compañero a unos clicks de distancia
          </StyledBannerTitle>
        )}

        {expanded ? (
          <StyledMultipleButtonsContainer>
            <Button variant="contained" color="primary" href="/start">
              ADOPTAR MI MASCOTA
            </Button>
            <Button variant="contained" color="secondary" href="/publish">
              PUBLICA UNA MASCOTA
            </Button>
          </StyledMultipleButtonsContainer>
        ) : (
          <Button variant="contained" href="/start">
            COMENZAR
          </Button>
        )}
      </StyledBannerContentContainer>
      <StyledOverlay showAlways={!expanded} />
    </StyledBannerContainer>
  );
};
