import React from "react";
import { FormControl } from "@material-ui/core/";
import { FormGroup, StyledInput } from "./Atom";
export interface IInput {
  type?: string;
  value?: string;
  label?: string | React.ReactNode;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const CInput: React.FC<IInput> = ({
  value,
  label,
  type,
  handleChange,
  placeholder,
}) => {
  return (
    <FormGroup marginY="16px">
      <label>{label}</label>
      <FormControl fullWidth variant="outlined">
        <StyledInput
          type={type}
          onChange={handleChange}
          placeholder={placeholder}
          value={value}
        />
      </FormControl>
    </FormGroup>
  );
};

export default CInput;
