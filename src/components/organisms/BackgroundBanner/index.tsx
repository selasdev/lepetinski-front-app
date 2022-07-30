import { Button } from "@mui/material";
import {
  StyledBannerImage,
  StyledBannerContainer,
  StyledBannerContentContainer,
  StyledOverlay,
  StyledBannerTitle,
} from "./index.styles";

export const BackgroundBanner = (): JSX.Element => {
  return (
    <StyledBannerContainer>
      <StyledBannerImage src="/assets/images/banner.png" alt="banner" />
      <StyledBannerContentContainer>
        <StyledBannerTitle>
          Tu nuevo compañero a unos clicks de distancia
        </StyledBannerTitle>
        <Button variant="contained">COMENZAR</Button>
      </StyledBannerContentContainer>
      <StyledOverlay />
    </StyledBannerContainer>
  );
};
