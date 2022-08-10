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
import axios from "axios";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAuthenticationProvider } from "../../contexts/Auth/context";
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
  const [genre, setGenre] = useState<string>('');
  const [imgUrl, setImgUrl] = useState<string>("");
  const { user } = useAuthenticationProvider();
  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // onSubmit({
    //   name,
    //   category,
    //   race,
    //   size,
    //   age,
    //   description,
    //   healthInfo,
    //   contactPhone,
    //   imgUrl,
    // });
    // console.log({
    //     name,
    //     category,
    //     race,
    //     size,
    //     age,
    //     description,
    //     healthInfo,
    //     contactPhone,
    //     imgUrl,
    //   })
    // console.log(user)

    const config = {
      headers: { 
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods' : '*'
      }
    }
    const data = {
      "celular_contacto": contactPhone,
      "descripcion": description,
      "usuario_id": user?.id,
      "raza_id": race,
      "mascota": {
        "nombre": name,
        "edad": parseInt(age, 10),
        "tipo_id": category,
        "genero": genre,
        "medida": size,
        "foto_url": imgUrl,
        "info_salud": healthInfo
      }
    }
    console.log(data)
    axios.post('https://t00e9m.deta.dev/publicar', data, config)
      .then(function (response:any) {
        // console.log(response)
        navigate(`/`)
      })
      .catch(function (error:any) {
        console.log(error)
      })
  };

  const [categories, setCategories] = useState<Array<any>>([])
  const [races, setRaces] = useState<Array<any>>([])

  useEffect(() => {
    const config = {
      headers: { 
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods' : '*'
      }
    } 
    axios.get('https://t00e9m.deta.dev/tipos', config)
      .then(function (response:any) {
        setCategories( () => [...response.data] )
      })
      .catch(function (error:any) {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    const config = {
      headers: { 
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods' : '*'
      }
    } 
    axios.get('https://t00e9m.deta.dev/razas/'+category, config)
      .then(function (response:any) {
        setRaces( () => [...response.data] )
      })
      .catch(function (error:any) {
        console.log(error)
      })
  }, [category])

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
                {categories.map(cat => (
                  <MenuItem key={`${cat.id}_text`} value={cat.id}>{cat.nombre}</MenuItem>
                ))

                }
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
                {races.map(race => (
                  <MenuItem key={`${race.id}_text`} value={race.id}>{race.nombre}</MenuItem>
                ))
                }
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
                <MenuItem value={1}>Pequeño</MenuItem>
                <MenuItem value={2}>Mediano</MenuItem>
                <MenuItem value={3}>Grande</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
          <FormControl fullWidth>
              <InputLabel id="genre-label">Genero</InputLabel>
              <Select
                required
                labelId="genre-label"
                id="genre"
                value={genre}
                label="Genero"
                onChange={(e: SelectChangeEvent<string>) => {
                  setGenre(e.target.value);
                }}
              >
                <MenuItem value={1}>Macho</MenuItem>
                <MenuItem value={2}>Hembra</MenuItem>
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
