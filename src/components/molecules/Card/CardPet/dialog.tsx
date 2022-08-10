import { Button, Dialog, Typography } from "@mui/material";
import styled from "styled-components";
import { themeBreakpoints } from "../../../../theme/breakpoints";
import { ISavedDialog } from "./types";

const MainContainer = styled.div`
  padding: 32px 48px 24px;

  @media (min-width: ${themeBreakpoints.tablet}) {
    padding: 32px 48px;
  }

  @media (min-width: ${themeBreakpoints.desktopsm}) {
    padding: 32px 60px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 16px;

  & button {
    padding: 10px;
  }
  & button:first-child {
    margin-bottom: 12px;
  }

  @media (min-width: ${themeBreakpoints.tablet}) {
    margin-top: 24px;
    & button:first-child {
      margin-bottom: 16px;
    }

    & button {
      padding: 12px;
    }
  }
`;

export const SavedPetDialog = ({
  name,
  open,
  onClose,
}: ISavedDialog): JSX.Element => {
  const handleClose = (deleted = false) => {
    onClose(deleted);
  };

  return (
    <Dialog
      onClose={() => {
        handleClose(false);
      }}
      open={open}
    >
      <MainContainer>
        <Typography
          textAlign="center"
          variant="body1"
          fontSize="24px"
          fontWeight={400}
        >
          ¿Deseas quitar a {name} de tus guardados?
        </Typography>
        <ButtonsContainer>
          <Button
            onClick={() => {
              onClose(false);
            }}
            fullWidth
            variant="contained"
            color="secondary"
          >
            NO DESEO BORRAR A {name}
          </Button>
          <Button
            onClick={() => {
              onClose(true);
            }}
            autoFocus
            fullWidth
            variant="contained"
            color="error"
          >
            DESEO BORRAR A {name}
          </Button>
        </ButtonsContainer>
      </MainContainer>
    </Dialog>
  );
};
