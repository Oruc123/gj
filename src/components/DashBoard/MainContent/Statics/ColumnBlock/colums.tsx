import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import { styled } from "./Atom";

export const ColumnPaper = ({ children }: { children: React.ReactNode }) => {
  const classes = styled();
  return (
    <div className={classes.item}>
      <Box className={classes.paper}>{children}</Box>
    </div>
  );
};

export const ColumBlock = ({ children }: { children: React.ReactNode }) => {
  const classes = styled();
  return (
    <div className={classes.root}>
      {React.Children.map(children, (child) => {
        return <ColumnPaper>{child}</ColumnPaper>;
      })}
    </div>
  );
};

export const ItemCounts = ({
  label,
  spinner,
  subTitle,
}: {
  label: string;
  spinner?: React.ReactNode;
  subTitle?: React.ReactNode;
}) => {
  const classes = styled();
  return (
    <Grid container alignItems="flex-start" spacing={2}>
      {spinner && (
        <Grid item sm={4}>
          {spinner}
        </Grid>
      )}
      <Grid item xs>
        <Typography className={classes.counthead} variant="h2">
          {label}
        </Typography>

        <Box marginTop={1}>{subTitle}</Box>
      </Grid>
    </Grid>
  );
};

type ItemContentProps = {
  label: string;
  children: React.ReactNode;
  link?: React.ReactNode;
  spinner?: number;
  border?: boolean;
};

export const ItemContent: React.FC<ItemContentProps> = ({
  label,
  link,
  border,
  children,
}) => {
  const classes = styled();
  return (
    <div className={classes.itemContent}>
      <Typography variant="h2">{label}</Typography>
      <Box marginTop={4}>
        <Grid container spacing={2}>
          {React.Children.map(children, (child) => {
            return (
              <Grid className={border ? classes.borderLeft : ""} item sm={6}>
                {child}
              </Grid>
            );
          })}
        </Grid>
      </Box>
      {link}
    </div>
  );
};
