import Button from '../../atoms/Button'
import {
  StyledBannerImage,
  StyledBannerContainer,
  StyledBannerContentContainer,
  StyledOverlay,
  StyledBannerTitle
} from './index.styles'

export const BackgroundBanner = () => {
  return (
    <StyledBannerContainer>
      <StyledBannerImage src='/assets/images/banner.png' alt='banner' />
      <StyledBannerContentContainer>
        <StyledBannerTitle>Tu nuevo compañero a unos clicks de distancia</StyledBannerTitle>
        <Button size='large'>COMENZAR</Button>
      </StyledBannerContentContainer>
      <StyledOverlay />
    </StyledBannerContainer>
  )
}
