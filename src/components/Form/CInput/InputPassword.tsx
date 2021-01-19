import React, { useState } from "react";
import { FormControl, InputAdornment, IconButton } from "@material-ui/core/";
import { Visibility, VisibilityOff } from "@material-ui/icons/";
import { FormGroup, StyledInput, useStyles } from "./Atom";
import { IInput } from "./index";

const InputPassword: React.FC<IInput> = ({ value, label, handleChange }) => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <FormGroup marginY="16px">
      <label>{label}</label>
      <FormControl fullWidth variant="outlined">
        <StyledInput
          type={showPassword ? "text" : "password"}
          onChange={handleChange}
          placeholder="Placeholder"
          value={value}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? (
                  <Visibility className={classes.color} />
                ) : (
                  <VisibilityOff className={classes.color} />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </FormGroup>
  );
};

export default InputPassword;
