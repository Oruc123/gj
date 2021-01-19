import { Box, Typography } from "@material-ui/core";
import React from "react";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { useStyles } from "./Atom";
import Chart from "./Chart";

const Column = ({
  dataOut,
  label,
  value,
}: {
  dataOut: Array<number>;
  label: string;
  value: string;
}) => {
  const style = useStyles();

  return (
    <Box className={style.block}>
      <Box position="relative" zIndex={10}>
        <Typography style={{ color: "#666", fontSize: 14 }} variant="body2">
          {label}
        </Typography>
        <Box marginBottom={1}>
          <Typography
            style={{ fontSize: 38 }}
            component="h3"
            variant="subtitle2"
          >
            {value}
          </Typography>
        </Box>
        <div>
          <Typography variant="h4" className={style.progress} component="span">
            <ArrowDropUpIcon className={style.icon} />
            100%
          </Typography>
        </div>
      </Box>
      <div className={style.chartBlock}>
        <Chart dataOut={dataOut} />
        <div className={style.shadow}></div>
      </div>
    </Box>
  );
};
export default Column;
