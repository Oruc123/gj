import { Button } from "@material-ui/core";
import React from "react";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
const EditButton = ({ clickHandler }: { clickHandler?: () => void }) => (
  <Button
    startIcon={<CreateOutlinedIcon />}
    onClick={clickHandler}
    color="primary"
  >
    Edit
  </Button>
);
export default EditButton;
