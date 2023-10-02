import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import Box from "@mui/material/Box/Box";
import style from "./LoginPage.module.css";
import pushUp from "../image/pushUp.png";
import Typography from "@mui/material/Typography";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import ColorButton from "../components/ColorButton";
import { useDispatch } from "react-redux";
import { loginActions } from "../store/loginSlice";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  async function addLogin(login) {
    const response = await fetch('https://website-783f4-default-rtdb.firebaseio.com/login.json',{
      method: 'POST',
      body: JSON.stringify(login),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  const loginHandler = (event) => {
    event.preventDefault();
    dispatch(loginActions.login());
    navigate("progress");
    const login = {
      key: '1',
      email: event.target[0].value,
      password: event.target[2].value
    }
    addLogin(login);
  };

  return (
    <Box className={style.loginContainer}>
      <Box className={style.box}>
        <Avatar
          src={pushUp}
          sx={{ width: 120, height: 120, marginTop: "40px" }}
        />
        <Typography variant="h4">Workout App</Typography>
      </Box>
      <form className={style.box} onSubmit={loginHandler}>
        <TextField
          className={style.input}
          sx={{ margin: "20px" }}
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />

        <Box variant="outlined" className={style.input}>
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
            <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            sx={{width: '100%'}}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  className={style.visibilityIcon}
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          <Box className={style.box}>
            <ColorButton
              variant="contained"
              className={style.login}
              type="submit"
            >
              Log In
            </ColorButton>
            <Typography variant="body2" sx={{ marginTop: "7px" }}>
              Don't have an account? - Sign UP
            </Typography>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default LoginPage;
