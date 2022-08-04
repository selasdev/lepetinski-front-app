import { Link } from "react-router-dom";
import styled from "styled-components";
import { themeBreakpoints } from "../../../../theme/breakpoints";

export const MainCardContainer = styled.div`
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 3px 8px -1px rgba(50, 50, 71, 0.25);
  filter: drop-shadow(0px 0px 1px rgba(12, 26, 75, 0.24));
  border-radius: 16px;
  padding: 8px 8px 16px;
  display: flex;
  flex-direction: column;
`;

export const AnimalImage = styled.img`
  width: 100%;
  border-radius: 16px;
  object-fit: cover;
  height: 136px;
  margin-bottom: 8px;

  @media (min-width: ${themeBreakpoints.tablet}) {
    height: 200px;
    margin-bottom: 12px;
  }

  @media (min-width: ${themeBreakpoints.desktopsm}) {
    height: 214px;
  }
`;

export const Title = styled.p`
  color: #16192c;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.46px;
  margin-bottom: 8px;
  margin-left: 12px;
`;

export const Description = styled.p`
  color: #425466;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.46px;
  margin-bottom: 4px;
  margin-left: 12px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
