import { CardIconProps } from './types'
import { StyledCardIconContainer, StyledCardIconIcon, StyledCardIconText } from './index.styles'

export const CardIcon = ({
  text = 'Perros',
  icon = '/assets/icons/dog-icon.svg'
}: CardIconProps) => {
  return (
    <StyledCardIconContainer>
      <StyledCardIconIcon src={icon} />
      <StyledCardIconText>{text}</StyledCardIconText>
    </StyledCardIconContainer>
  )
}
