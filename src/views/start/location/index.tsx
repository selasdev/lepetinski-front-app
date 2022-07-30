import React, { useState } from "react";
import { useParams } from "react-router";
import { GuidedStepsTemplate } from "../../../templates/GuidedSteps";
import { FinalButtonContainer, SecondaryHeader } from "../index.styles";
import Slider from "@mui/material/Slider";
import {
  marksAge,
  marksDistance,
  valueLabelFormatAge,
  valueLabelFormatDistance,
  valueTextAge,
  valueTextDistance,
} from "./marks";
import { Button } from "@mui/material";

export const StartLocationView = (): JSX.Element => {
  const { category, race, size } = useParams();
  const [age, setAge] = useState<number>(1);
  const [distance, setDistance] = useState<number>(10);

  const onDistanceChange = (_: any, value: number | number[]) => {
    setDistance(value as number);
  };

  const onAgeChange = (_: any, value: number | number[]) => {
    setAge(value as number);
  };

  return (
    <GuidedStepsTemplate>
      <SecondaryHeader>¿Qué tan cerca de tí está?</SecondaryHeader>
      <Slider
        onChangeCommitted={onDistanceChange}
        min={0}
        max={100}
        aria-label="Distancia de la mascota"
        defaultValue={10}
        valueLabelFormat={valueLabelFormatDistance}
        getAriaValueText={valueTextDistance}
        valueLabelDisplay="on"
        marks={marksDistance}
        step={10}
      />
      <SecondaryHeader style={{ marginTop: 24 }}>
        ¿Qué edad tiene?
      </SecondaryHeader>
      <Slider
        onChangeCommitted={onAgeChange}
        min={0}
        max={10}
        aria-label="Edad de la mascota"
        defaultValue={1}
        valueLabelFormat={valueLabelFormatAge}
        getAriaValueText={valueTextAge}
        valueLabelDisplay="on"
        marks={marksAge}
        step={1}
      />
      <FinalButtonContainer>
        <Button
          variant="contained"
          color="primary"
          size="large"
          href={`/search?category=${category}&race=${race}&size=${size}&distance=${distance}&age=${age}`}
        >
          ¡MUÉSTRAME!
        </Button>
      </FinalButtonContainer>
    </GuidedStepsTemplate>
  );
};
