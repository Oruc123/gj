import { Box } from "@material-ui/core";
import React from "react";
import LocationStatus from "../LocationContent/Statics/LocationStatus";
import LocationAvatar from "./LocationAvatar";
import LocationImagesfrom from "./LocationAvatar/Images";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Configure from "./Configure/";
import { ctx } from "../../../context";
import LocationNav from "../DrawerMenu/LocationNav";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      position: "relative",
      width: 459,
      // paddingBottom: 120,
      [theme.breakpoints.down(1024)]: {
        width: "100%",
      },
    },
    statusBlock: {
      position: "absolute",
      left: `calc(100% + ${theme.spacing(2)}px)`,
      top: 0,
      width: 222,
      maxHeight: 171,
    },
  })
);
const LocationEdit = () => {
  const { mobile, tablet } = React.useContext(ctx);
  const styles = useStyles();
  return (
    <Box className={styles.main}>
      {!mobile && (
        <>
          <Box bgcolor="#fff" margin="-8px" paddingTop={1} marginBottom={1}>
            <LocationNav />
          </Box>
          <LocationStatus />
        </>
      )}
      {mobile && (
        <Box className={styles.statusBlock}>
          <LocationStatus />
        </Box>
      )}
      <LocationImagesfrom />
      <LocationAvatar />
      <Box marginTop={3}>
        <Configure />
      </Box>
    </Box>
  );
};
export default LocationEdit;
