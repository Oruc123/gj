import React from "react";
import { Breadcrumbs, Link, Typography } from "@material-ui/core";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import { useStyles } from "./Atom";
import clsx from "clsx";
const GBreadcump = () => {
  const classes = useStyles();
  return (
    <Breadcrumbs className={classes.root} aria-label="breadcrumb">
      <Link className={clsx(classes.link, classes.breadHome)}>
        <HomeOutlinedIcon style={{ fontSize: 18 }} />
      </Link>
      <Link className={classes.link}>Dashboards</Link>
      <Typography
        style={{
          color: "#C7C7C7",
          fontSize: 12,
          fontWeight: 400,
          transform: "translateY(1px)",
        }}
      >
        Hermitage Square
      </Typography>
    </Breadcrumbs>
  );
};

export default GBreadcump;
