import React from "react";
import {
  Typography,
  List,
  ListItem,
  Box,
  Link,
  Button,
} from "@material-ui/core";
import useStyles from "./Atom";
const TooltipContent = () => {
  const classes = useStyles();
  return (
    <>
      <Box>
        <Button className={classes.toolTipButton}>Timetable</Button>
        <Button disabled className={classes.toolTipButton}>
          Special
        </Button>
      </Box>
      <List className={classes.toolTipUl} disablePadding>
        <ListItem className={classes.toolTipLi} disableGutters>
          <Typography className={classes.toolTipDay}>Sunday</Typography>
          <Typography className={classes.toolTipHours}>
            9:00 AM to 8:00 PM
          </Typography>
        </ListItem>
        <ListItem className={classes.toolTipLi} disableGutters>
          <Typography className={classes.toolTipDay}>Monday</Typography>
          <Typography className={classes.toolTipHours}>
            9:00 AM to 8:00 PM
          </Typography>
        </ListItem>
        <ListItem className={classes.toolTipLi} disableGutters>
          <Typography className={classes.toolTipDay}>Thuesday</Typography>
          <Typography className={classes.toolTipHours}>
            9:00 AM to 8:00 PM
          </Typography>
        </ListItem>
        {/* <ListItem className={classes.toolTipLi} disableGutters>
          <Typography className={classes.toolTipDay}>Wednesday</Typography>
          <Typography className={classes.toolTipHours}>
            9:00 AM to 8:00 PM
          </Typography>
        </ListItem>
        <ListItem className={classes.toolTipLi} disableGutters>
          <Typography className={classes.toolTipDay}>Thursday</Typography>
          <Typography className={classes.toolTipHours}>
            9:00 AM to 8:00 PM
          </Typography>
        </ListItem> */}
        <ListItem className={classes.toolTipLi} disableGutters>
          <Typography className={classes.toolTipDay}>Friday</Typography>
          <Typography className={classes.toolTipHours}>
            9:00 AM to 8:00 PM
          </Typography>
        </ListItem>
        <ListItem className={classes.toolTipLi} disableGutters>
          <Typography className={classes.toolTipDay}>Saturaday</Typography>
          <Typography className={classes.toolTipHours}>
            9:00 AM to 8:00 PM
          </Typography>
        </ListItem>
      </List>
    </>
  );
};
export default TooltipContent;
