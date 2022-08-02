import { Grid } from "@mui/material";
import { CardIcon } from "../../components/molecules/Card/CardIcon";
import { CategoriesData } from "../../components/organisms/Categories/__mocks__/data";
import { GuidedStepsTemplate } from "../../templates/GuidedSteps";
import { MainHeader, SecondaryHeader } from "./index.styles";

const StartView = (): JSX.Element => {
  return (
    <GuidedStepsTemplate>
      <MainHeader>Nos alegra iniciar la búsqueda de tu compañero</MainHeader>
      <SecondaryHeader>¿Qué estás buscando?</SecondaryHeader>
      <Grid container spacing={4}>
        {CategoriesData.map(({ icon, text }, index) => (
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <CardIcon
              key={`${index}_text`}
              icon={icon}
              text={text}
              link="/start/dogs"
            />
          </Grid>
        ))}
      </Grid>
    </GuidedStepsTemplate>
  );
};

export default StartView;
