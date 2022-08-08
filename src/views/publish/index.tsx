import { useNavigate } from "react-router";
import { Button } from "@mui/material";
import Navbar from "../../components/organisms/Navbar";
import { NavigationContainer, StyledMain } from "./index.styles";
import { PublishForm } from "./form";

export const PublishView = (): JSX.Element => {
  const navigate = useNavigate();
  const onFormSubmit = () => {
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <StyledMain>
        <NavigationContainer>
          <Button
            variant="text"
            color="primary"
            onClick={() => {
              navigate(-1);
            }}
          >
            VOLVER
          </Button>
        </NavigationContainer>
        <PublishForm onSubmit={onFormSubmit} />
      </StyledMain>
    </>
  );
};
