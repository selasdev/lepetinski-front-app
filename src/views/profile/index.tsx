import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { CardPet } from "../../components/molecules/Card/CardPet";
import { ICardPet } from "../../components/molecules/Card/CardPet/types";
import Navbar from "../../components/organisms/Navbar";
import { useAuthenticationProvider } from "../../contexts/Auth/context";
import { results } from "../search/__mocks__/data";

export const ProfileView = () => {
  const { user } = useAuthenticationProvider();

  return (
    <>
      <Navbar />
      <Box
        sx={(theme) => ({
          padding: "16px 16px 0",
          [theme.breakpoints.up("sm")]: {
            padding: "16px 55px 0",
            marginBottom: "30px",
          },
          [theme.breakpoints.up("lg")]: {
            padding: "30px 70px 0",
            marginBottom: "60px",
          },
        })}
      >
        <Grid container>
          <Grid item xs={12} lg={6}>
            <Typography
              variant="h4"
              fontSize="24px"
              marginTop="40px"
              fontWeight={700}
              sx={(theme) => ({
                color: theme.palette.primary.main,
              })}
            >
              Mi perfil
            </Typography>
            <Card
              sx={() => ({
                marginTop: "23px",
                maxWidth: "500px",
              })}
            >
              <CardContent>
                <Typography variant="body1" fontSize="16px" fontWeight={400}>
                  {user?.name}
                </Typography>
                <Typography variant="body1" fontSize="16px" fontWeight={400}>
                  {user?.email}
                </Typography>
                <Typography variant="body1" fontSize="16px" fontWeight={400}>
                  {user?.address}
                </Typography>
                <Typography variant="body1" fontSize="16px" fontWeight={400}>
                  {user?.age}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Typography
              variant="h4"
              fontSize="24px"
              marginTop="25px"
              fontWeight={700}
              sx={(theme) => ({
                color: theme.palette.primary.main,
              })}
            >
              Mascotas que vas a adoptar
            </Typography>
            <Grid container spacing={2} marginTop="23px">
              {results.slice(0, 2).map((item: ICardPet, idx) => (
                <Grid item xs={12} sm={6} md={4} lg={6} key={item.name + idx}>
                  <CardPet {...item} />
                </Grid>
              ))}
            </Grid>
            <Typography
              variant="h4"
              fontSize="24px"
              marginTop="25px"
              fontWeight={700}
              sx={(theme) => ({
                color: theme.palette.primary.main,
              })}
            >
              Mascotas Guardadas
            </Typography>
            <Grid container spacing={2} marginTop="23px">
              {results.slice(2, 4).map((item: ICardPet, idx) => (
                <Grid item xs={12} sm={6} md={4} lg={6} key={item.name + idx}>
                  <CardPet {...item} saved={true} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
