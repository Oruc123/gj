import { Box, Typography, Button, Paper } from "@material-ui/core";
import React from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { useStyles } from "./Atom";
import { DropDownWrapper, DropDownItem } from "../../../DropDown";
import { ICheckCircle } from "../../../../Icons";
import { ctx } from "../../../../../context";
const LocationStatus = ({ editPage }: { editPage?: boolean }) => {
  const [isOpen, setOpen] = React.useState(false);
  const classes = useStyles();
  const wrapperRef: any = React.useRef(null);
  const { mobile } = React.useContext(ctx);
  const circleSize = mobile ? 48 : 24;
  React.useEffect(() => {
    function handleClickOutside(event: any) {
      if (wrapperRef.current && !wrapperRef?.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);
  return (
    <Box className={classes.root}>
      <Box className={classes.paper}>
        <div ref={wrapperRef}>
          <Typography style={{ color: "#494F59", fontSize: 14 }} variant="h2">
            Location status
          </Typography>

          <Box className={classes.mobileButton}>
            <Box marginTop={editPage ? 2 : 4} marginBottom={1}>
              <ICheckCircle size={circleSize} />
            </Box>

            <Box position="relative">
              <Button
                onClick={() => setOpen(!isOpen)}
                disableRipple
                disableFocusRipple
                disableTouchRipple
                fullWidth
                classes={{
                  root: classes.openButton,
                  endIcon: classes.buttonincon,
                  label: classes.label,
                }}
              >
                Open
              </Button>

              <Box zIndex={2} position="absolute" right={0} top="10px">
                <KeyboardArrowDownIcon
                  style={{ fontSize: 24 }}
                  color="secondary"
                />
              </Box>
            </Box>
          </Box>
          {isOpen && (
            <DropDownWrapper top>
              <DropDownItem text="Open" />
              <DropDownItem text="Closed" />
              <DropDownItem text="Temporarily not working" />
            </DropDownWrapper>
          )}
        </div>
      </Box>
    </Box>
  );
};
export default LocationStatus;
