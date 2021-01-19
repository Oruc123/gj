import React from "react";
import { Box, Button, Paper, SwipeableDrawer } from "@material-ui/core";
import FilterTop from "./Components/Top";
import FilterSearch from "./Components/FilterSearch";
import LocationGroups from "./Components/LocationGroups";
import Locations from "./Components/Locations";
import Period from "./Components/Period";
import Raiting from "./Components/Raiting";
import Services from "./Components/Services";
import ReviewContents from "./Components/ReviewContents";
import Tags from "./Components/Tags";
import { useStyles } from "./Atom";

const FilterContent = ({ closeFilter }: { closeFilter?: () => void }) => (
  <Paper elevation={0}>
    <FilterTop closeFilter={closeFilter} raiting="4.6" reviews="812 678  678" />
    <FilterSearch />
    <LocationGroups />
    <Locations />
    <Period />
    <Raiting />
    <Services />
    <ReviewContents />
    <Tags />
    <Box padding={2}>
      <Button
        style={{ background: "#F5F6FA", padding: 8 }}
        fullWidth
        color="primary"
      >
        Reset filters
      </Button>
    </Box>
  </Paper>
);
const Filters = ({
  swipp,
  openFilter,
  closeFilter,
  drawOpen,
}: {
  swipp?: boolean;
  drawOpen?: boolean;
  openFilter?: () => void;
  closeFilter?: () => void;
}) => {
  const classes = useStyles();
  const openHandler = () => {
    if (openFilter) openFilter();
  };
  const closeHandler = () => {
    if (closeFilter) closeFilter();
  };
  if (swipp) {
    return (
      <SwipeableDrawer
        classes={{
          root: classes.swipeableDrawer,
          paper: classes.swipPaper,
          modal: classes.modal,
        }}
        open={drawOpen || false}
        onOpen={openHandler}
        onClose={closeHandler}
        anchor="right"
        disableBackdropTransition
        // BackdropComponent={BackfRop}
        BackdropProps={{ invisible: true }}
      >
        <FilterContent closeFilter={closeHandler} />
      </SwipeableDrawer>
    );
  }
  return <FilterContent />;
};

export default Filters;
