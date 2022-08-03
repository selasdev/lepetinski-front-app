import {
  Alert,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import Button from "@mui/material/Button";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Box from "@mui/material/Box";
import { VisibilityOff } from "@mui/icons-material";
import { ChangeEvent, FormEvent, useState } from "react";
import { formatDate, validateEmail, validatePassword } from "./utils";

export type FormValuesType = {
  name: string;
  email: string;
  date: string;
  password: string;
};

interface IRegisterForm {
  onSubmit: (values: FormValuesType) => void;
}

export const RegisterForm = ({ onSubmit }: IRegisterForm): JSX.Element => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [date, setDate] = useState<any>();
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordConfirm, setShowPasswordConfirm] =
    useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let newErrors: Record<string, string> = {};

    if (name.length < 5) {
      newErrors.name = "El nombre debería ser mayor a 5 caracteres.";
    }
    if (!validateEmail(email)) {
      newErrors.email = "El correo electrónico no parece correcto.";
    }
    if (password !== passwordConfirm) {
      newErrors.passwordConfirm = "Las contraseñas no coinciden";
    } else if (!validatePassword(password)) {
      newErrors.password =
        "La contraseña no es lo suficientemente fuerte, usa mínimo: 1 minúscula, 1 mayúscula, 1 número y 1 caracter especial.";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length < 1) {
      onSubmit({
        name,
        email,
        date: formatDate(date || new Date()),
        password,
      });
    }
  };

  return (
    <Box
      sx={(theme) => ({
        [theme.breakpoints.up("sm")]: {
          background: "#EFEFD0",
          maxWidth: "407px",
          margin: "64px auto 0",
        },
        padding: "32px 16px 68px",
        borderRadius: "15px",
      })}
    >
      <form onSubmit={handleSubmit}>
        <Grid container rowSpacing={4}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                id="name"
                label="Nombre completo"
                variant="outlined"
                error={errors?.name ? true : false}
                helperText={errors?.name}
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
              <TextField
                id="email"
                label="Correo"
                variant="outlined"
                required
                error={errors?.email ? true : false}
                helperText={errors?.email}
                value={email}
                onChange={(
                  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                ) => {
                  setEmail(e.target.value);
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  value={date}
                  onChange={(newValue) => {
                    setDate(newValue);
                  }}
                  label="Fecha de nacimiento"
                  renderInput={(params: TextFieldProps) => (
                    <TextField
                      {...params}
                      id="date"
                      required
                      error={errors?.date ? true : false}
                      helperText={errors?.date}
                    />
                  )}
                />
              </LocalizationProvider>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="password">Contraseña</InputLabel>
              <OutlinedInput
                required
                type={showPassword ? "text" : "password"}
                id="password"
                error={errors?.password ? true : false}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Contraseña"
                value={password}
                onChange={(
                  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                ) => {
                  setPassword(e.target.value);
                }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="passwordConfirm ">
                Repite contraseña
              </InputLabel>
              <OutlinedInput
                required
                type={showPasswordConfirm ? "text" : "password"}
                id="passwordConfirm"
                error={errors?.passwordConfirm ? true : false}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end"
                      onClick={() =>
                        setShowPasswordConfirm(!showPasswordConfirm)
                      }
                    >
                      {showPasswordConfirm ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Repite contraseña"
                value={passwordConfirm}
                onChange={(
                  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                ) => {
                  setPasswordConfirm(e.target.value);
                }}
              />
            </FormControl>
          </Grid>

          {errors?.password || errors?.passwordConfirm ? (
            <Grid item xs={12}>
              <Box>
                {errors?.password ? (
                  <Alert severity="error">{errors.password}</Alert>
                ) : null}

                {errors?.passwordConfirm ? (
                  <Alert severity="error">{errors.passwordConfirm}</Alert>
                ) : null}
              </Box>
            </Grid>
          ) : null}

          <Grid item xs={12}>
            <Box sx={{ "& button": { width: "100%" } }}>
              <Button variant="contained" type="submit">
                CREAR CUENTA
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body2" textAlign="center">
              ¿Ya tienes una cuenta? <Link href="/login">INICIA SESION</Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};
