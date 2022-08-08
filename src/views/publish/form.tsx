import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { FormBox, PetImage } from "./index.styles";

interface IPublishFormValues {
  name: string;
  category: string;
  race: string;
  size: string;
  age: string;
  description: string;
  healthInfo: string;
  contactPhone: string;
  imgUrl: string;
}

export interface IPublishForm {
  onSubmit: (values: IPublishFormValues) => void;
}

export const PublishForm = ({ onSubmit }: IPublishForm) => {
  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [race, setRace] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [healthInfo, setHealthInfo] = useState<string>("");
  const [contactPhone, setContactPhone] = useState<string>("");
  const [imgUrl, setImgUrl] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({
      name,
      category,
      race,
      size,
      age,
      description,
      healthInfo,
      contactPhone,
      imgUrl,
    });
  };

  return (
    <FormBox>
      <Typography gutterBottom variant="h1" fontSize="48px" fontWeight={400}>
        Publica una mascota
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container rowSpacing={3}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                id="name"
                label="Nombre de la mascota"
                variant="outlined"
                required
                value={name}
                onChange={(
                  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                ) => {
                  setName(e.target.value);
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="category-label">Tipo</InputLabel>
              <Select
                required
                labelId="category-label"
                id="category"
                value={category}
                label="Tipo"
                onChange={(e: SelectChangeEvent<string>) => {
                  setCategory(e.target.value);
                }}
              >
                <MenuItem value={"dog"}>Perro</MenuItem>
                <MenuItem value={"cat"}>Gato</MenuItem>
                <MenuItem value={"bird"}>Ave</MenuItem>
                <MenuItem value={"hamster"}>Hamster</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="race-label">Raza</InputLabel>
              <Select
                required
                labelId="race-label"
                id="race"
                value={race}
                label="Raza"
                onChange={(e: SelectChangeEvent<string>) => {
                  setRace(e.target.value);
                }}
              >
                <MenuItem value={"small"}>Mestizo</MenuItem>
                <MenuItem value={"small"}>Rottweiler</MenuItem>
                <MenuItem value={"medium"}>Pitbull</MenuItem>
                <MenuItem value={"big"}>Chihuahua</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="size-label">Tamaño</InputLabel>
              <Select
                required
                labelId="size-label"
                id="size"
                value={size}
                label="Tamaño"
                onChange={(e: SelectChangeEvent<string>) => {
                  setSize(e.target.value);
                }}
              >
                <MenuItem value={"small"}>Pequeño</MenuItem>
                <MenuItem value={"medium"}>Mediano</MenuItem>
                <MenuItem value={"big"}>Grande</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                id="age"
                label="Edad"
                variant="outlined"
                required
                value={age}
                type="number"
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                onChange={(
                  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                ) => {
                  setAge(e.target.value);
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                id="description"
                label="Descripción"
                variant="outlined"
                required
                value={description}
                onChange={(
                  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                ) => {
                  setDescription(e.target.value);
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                id="healthInfo"
                label="Información de salud"
                variant="outlined"
                required
                value={healthInfo}
                onChange={(
                  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                ) => {
                  setHealthInfo(e.target.value);
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                id="contactPhone"
                label="Número de contacto"
                variant="outlined"
                required
                value={contactPhone}
                onChange={(
                  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                ) => {
                  setContactPhone(e.target.value);
                }}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {imgUrl ? (
            <PetImage
              onClick={() => {
                setImgUrl("");
              }}
              src={imgUrl}
              alt="Imagen de la mascota a publicar"
            />
          ) : (
            <Box sx={{ "& button": { width: "100%" } }}>
              <Button
                variant="contained"
                color="secondary"
                type="button"
                onClick={() => {
                  setImgUrl("https://i.imgur.com/u11vD9J.jpeg");
                }}
              >
                SUBIR IMAGEN
              </Button>
            </Box>
          )}
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ "& button": { width: "100%" } }}>
            <Button variant="contained" color="primary" type="submit">
              PUBLICAR
            </Button>
          </Box>
        </Grid>
      </form>
    </FormBox>
  );
};
