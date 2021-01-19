import { Box, Typography } from "@material-ui/core";
import React from "react";
import CPaper from "../../../Elements/CPaper";
import useStyles from "./Atom";
const Presence = () => {
  const classes = useStyles();
  return (
    <CPaper height>
      <Typography variant="h2">Presence</Typography>
      <Box className={classes.mobileFlex}>
        <Box alignItems="center" display="flex" marginTop={2} marginBottom={3}>
          <Box
            minWidth={30}
            minHeight={30}
            display="flex"
            alignItems="center"
            justifyContent="center"
            marginRight={3}
          >
            <Typography style={{ fontSize: 26, fontWeight: 500 }} color="error">
              5
            </Typography>
          </Box>
          <div>
            <Typography style={{ marginBottom: 8 }} variant="body2">
              Ошибок
            </Typography>
            <Typography style={{}} variant="subtitle1">
              Критические ошибки серьезно влияют на работу системы
            </Typography>
          </div>
        </Box>
        <Box alignItems="center" display="flex" marginBottom={1}>
          <Box
            minWidth={30}
            minHeight={30}
            display="flex"
            alignItems="center"
            justifyContent="center"
            marginRight={3}
          >
            <Typography
              style={{ fontSize: 26, fontWeight: 500, color: "#FF9B04" }}
            >
              22
            </Typography>
          </Box>
          <div>
            <Typography style={{ marginBottom: 8 }} variant="body2">
              Ошибок
            </Typography>
            <Typography style={{}} variant="subtitle1">
              Критические ошибки серьезно влияют на работу системы
            </Typography>
          </div>
        </Box>
      </Box>
    </CPaper>
  );
};
export default Presence;
