import {
  Button,
  ListItem,
  Typography,
  ListItemIcon,
  Box,
} from "@material-ui/core";
import React from "react";
import { useStyles } from "./Atom";
import { useHistory } from "react-router-dom";
import LocationDialog from "../LocationContent/LocationDialog";
import { ctx } from "../../../context";
import { ICheckCircle, IChevronDown, ILeft, IMapPin } from "../../Icons";

const LocationNav = () => {
  const classes = useStyles();
  const history = useHistory();
  const { mobile } = React.useContext(ctx);

  const [isOpen, setOpen] = React.useState(false);
  const handleClose = React.useCallback(() => {
    setOpen(false);
  }, [isOpen]);
  return (
    <>
      {isOpen && <LocationDialog open={isOpen} handleClose={handleClose} />}

      <ListItem style={{ paddingLeft: 24 }}>
        <Button
          onClick={() => setOpen(true)}
          classes={{
            root: classes.projectListButton,
            label: classes.projectListLabel,
          }}
          endIcon={<IChevronDown />}
          fullWidth
          disableRipple
        >
          Starbucks
          <Box
            marginRight="auto"
            alignSelf="center"
            display="inline-flex"
            alignItems="center"
            marginLeft={2}
            component="span"
          >
            <ICheckCircle />
          </Box>
        </Button>
      </ListItem>
      <ListItem style={{ paddingLeft: 24 }} className={classes.decsription}>
        <ListItemIcon style={{ justifyContent: "flex-start", minWidth: 42 }}>
          <IMapPin />
        </ListItemIcon>
        <Typography variant="body2">
          Baumana street 51 Kazan, TA 420111
        </Typography>
      </ListItem>
      <Button
        color="primary"
        disableRipple
        className={classes.backButton}
        classes={{ label: classes.backButtonLabel }}
        startIcon={<ILeft />}
        onClick={() => history.push("/")}
      >
        Back all locations
      </Button>
    </>
  );
};
export default LocationNav;
