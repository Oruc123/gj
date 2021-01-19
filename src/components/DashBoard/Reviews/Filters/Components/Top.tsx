import { Box, Grid, Hidden, IconButton, Typography } from "@material-ui/core";
import React from "react";
import { IClose } from "../../../../Icons";
import { FilterBlock } from "../Atom";

const FilterTop = ({
  raiting,
  reviews,
  closeFilter,
}: {
  closeFilter?: () => void;
  raiting: number | string;
  reviews: number | string;
}) => {
  const clickHandler = () => {
    if (closeFilter) closeFilter();
  };
  return (
    <FilterBlock>
      <Grid container spacing={2}>
        <Grid item xs={4} md={4} lg={6}>
          <Box marginBottom={1}>
            <Typography style={{ fontSize: 13, color: "#494F59" }} variant="h1">
              Rating
            </Typography>
          </Box>
          <Typography variant="h2" component="span">
            {raiting}
          </Typography>
        </Grid>
        <Grid item xs={4} md={8} lg={6}>
          <Box minWidth={300} marginBottom={1}>
            <Typography style={{ fontSize: 13, color: "#494F59" }} variant="h1">
              Reviews
            </Typography>
          </Box>
          <Typography variant="h2" component="span">
            {reviews}
          </Typography>
        </Grid>

        <Hidden mdUp>
          <Grid style={{ alignSelf: "flex-start" }} item xs={4}>
            <Box textAlign="right" style={{ transform: "translateY(-8px)" }}>
              <IconButton
                disableFocusRipple
                disableRipple
                style={{ padding: 0 }}
                onClick={clickHandler}
              >
                <IClose size={24} />
              </IconButton>
            </Box>
          </Grid>
        </Hidden>
      </Grid>
    </FilterBlock>
  );
};

export default FilterTop;
