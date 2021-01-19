import React from "react";
import Input from "../Form/CInput";
import InputPassword from "../Form/CInput/InputPassword";
import { Button, Link } from "@material-ui/core";
import { ButtonBox } from "./Atom";
import ICheckbox from "../Form/Checkbox";
import { ctx } from "../../context";
interface State {
  email: string;
  password: string;
}

const Login = () => {
  const { login } = React.useContext(ctx);
  const [values, setValues] = React.useState<State>({
    email: "",
    password: "",
  });

  const handleChange = (prop: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setValues({ ...values, [prop]: event.target.value });

  return (
    <form>
      <Input
        label="Login"
        value={values.email}
        handleChange={handleChange("email")}
        type="email"
        placeholder="Enter your Email"
      />
      <InputPassword
        label="Password"
        value={values.password}
        handleChange={handleChange("password")}
      />
      <ButtonBox>
        <ICheckbox
          label={
            <>
              Confirm that you have read and agree to the terms of the
              <Link href="/"> System Usage Agreement.</Link>
            </>
          }
        />

        <Button onClick={login} variant="contained" color="primary">
          Start to work
        </Button>
      </ButtonBox>
    </form>
  );
};
export default Login;
