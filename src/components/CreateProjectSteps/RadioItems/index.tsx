import {
  Box,
  FormControlLabel,
  Radio,
  Typography,
  Grid,
  Checkbox,
} from "@material-ui/core";
import React from "react";
import useStyles from "../Steps/Atom";
interface IRadioItems {
  title?: string;
  value: string;
  name: string;
  adress: string;
  category: string;
  selectedValue: string;
  key?: number;
  checkbox?: boolean;
}
const RadioItems: React.FC<IRadioItems> = ({
  title,
  value,
  name,
  adress,
  category,
  selectedValue,
  checkbox,
}) => {
  const {
    itemStyle,
    itemTitle,
    helperText,
    radioLabel,
    root,
    radioRoot,
  } = useStyles();
  return (
    <>
      <Box className={itemStyle}>
        {title && (
          <Typography className={itemTitle} variant="body1">
            Most companies are already present on Google or Yandex maps. And
            yours, soon all, too. We will try to find it.
          </Typography>
        )}
        <Grid container>
          <Grid xs={4} item>
            <FormControlLabel
              value={value}
              control={
                checkbox ? (
                  <Checkbox color="primary" className={radioRoot} />
                ) : (
                  <Radio color="primary" className={radioRoot} />
                )
              }
              label={
                <Box>
                  {name}
                  <Typography className={helperText} variant="body2">
                    {adress}
                  </Typography>
                </Box>
              }
              classes={{ label: radioLabel, root: root }}
            />
          </Grid>
          <Grid style={{ textAlign: "right" }} xs={5} item>
            <Typography variant="body2"> {category}</Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default RadioItems;
