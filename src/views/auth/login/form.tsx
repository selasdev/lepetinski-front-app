import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Grid,
  FormControl,
  TextField,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
  Typography,
  Box,
  Link,
} from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";

export type FormValuesType = {
  email: string;
  password: string;
};

interface ILoginForm {
  onSubmit: (values: FormValuesType) => void;
}

const LoginForm = ({ onSubmit }: ILoginForm): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({
      email,
      password,
    });
  };

  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <Box
      sx={(theme) => ({
        marginTop: "150px",
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
                id="email"
                label="Correo electrónico"
                variant="outlined"
                required
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
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="password">Contraseña</InputLabel>
              <OutlinedInput
                type={showPassword ? "text" : "password"}
                required
                id="password"
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
            <Box sx={{ "& button": { width: "100%" } }}>
              <Button variant="contained" type="submit">
                INICIAR SESIÓN
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body2" textAlign="center">
              ¿No tienes una cuenta? <Link href="/sign-in">CREA UNA</Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default LoginForm;
