import React from "react";

import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Box } from "@material-ui/core";
type IGProgressSpinner = {
  width?: number;
  value: number;
  text?: React.ReactNode;
  full?: boolean;
  color?: string;
  rotate?: boolean;
};
const GProgressSpinner: React.FC<IGProgressSpinner> = ({
  width = 33,
  value,
  full,
  text,
  color = "#283BC1",
  rotate,
}) => {
  return (
    <Box width={width}>
      <CircularProgressbarWithChildren
        strokeWidth={4}
        value={value}
        maxValue={100}
        styles={{
          path: {
            stroke: color,
            strokeLinecap: "round",
            transform: rotate ? "rotate(0.17turn)" : "",
            transformOrigin: rotate ? "center center" : "",
          },
          trail: {
            strokeWidth: full ? 4 : 2,
            stroke: "#D3DCEC",
          },
        }}
      >
        {text}
      </CircularProgressbarWithChildren>
    </Box>
  );
};
export default GProgressSpinner;
