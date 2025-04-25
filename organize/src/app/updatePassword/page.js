"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function updatePassword() {
  const [showPassword1, setShowPassword1] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);

  const handleClickShowPassword1 = () => setShowPassword1((show) => !show);

  const handleMouseDownPassword1 = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword1 = (event) => {
    event.preventDefault();
  };

  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword2 = (event) => {
    event.preventDefault();
  };

  return (
    <main className="sm:ml-14 p-4 bg-gray-900">
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center text-center">
        <div className="w-full max-w-sm p-8 rounded-lg shadow-lg relative">
          <img
            src="postit2.png"
            alt="Post-it"
            className="w-full h-full object-cover shadow-lg absolute top-0 left-0 rounded-lg"
          />
          <h2 className="text-2xl font-semibold text-center text-black mb-6 relative z-10"></h2>
          <h2 className="text-2xl font-semibold text-center text-black mb-6 relative z-10">
            Alterar senha
          </h2>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Antiga senha
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword1 ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword1
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword1}
                    onMouseDown={handleMouseDownPassword1}
                    onMouseUp={handleMouseUpPassword1}
                    edge="end"
                  >
                    {showPassword1 ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Antiga senha"
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Nova senha
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword2 ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword2
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword2}
                    onMouseDown={handleMouseDownPassword2}
                    onMouseUp={handleMouseUpPassword2}
                    edge="end"
                  >
                    {showPassword2 ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Nova senha"
            />
          </FormControl>
          <Button variant="contained" color="warning" startIcon={<BookmarkBorderIcon />}>
            Delete
          </Button>
        </div>
      </div>
    </main>
  );
}
