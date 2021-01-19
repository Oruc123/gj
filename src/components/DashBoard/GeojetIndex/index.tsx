import {
  List,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React from "react";
import { GPaper } from "../MainContent/Atom";
import GListItem from "../GListItem";
import { ReactComponent as ProgresSpinner } from "../../../assets/img/progress.svg";
const data = [
  {
    path: "#",
    title: "Connect Google My Bussines",
    subTitle: "Add data and connect Starbucks profile for Google My Bussines",
    persent: "+24%",
  },
  {
    path: "#",
    title: "Connect Google My Bussines",
    subTitle: "Add data and connect Starbucks profile for Google My Bussines",
    persent: "+24%",
  },
  {
    path: "#",
    title: "Connect Google My Bussines",
    subTitle: "Add data and connect Starbucks profile for Google My Bussines",
    persent: "+24%",
  },
];

const Geoİndex = ({ flex }: { flex?: boolean }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down(1280));
  return (
    <GPaper style={{ height: "100%", borderRadius: 4 }}>
      <Box
        display={flex && !matches ? "flex" : "block"}
        alignItems="center"
        justifyContent="space-between"
        paddingBottom={1}
        maxWidth={!flex ? 410 : "auto"}
        marginLeft="auto"
        marginRight="auto"
      >
        <Box textAlign="center" marginBottom={2.5}>
          <Box position="relative">
            <Box
              style={{ transform: "translateX(-50%)" }}
              position="absolute"
              left="calc(50% - 2px)"
              top="25%"
            >
              <Typography
                variant="h1"
                style={{ fontWeight: 500, fontSize: 38 }}
              >
                <span style={{ marginRight: 4 }}> 69</span>
                <br />
                <Typography
                  style={{ color: "#666", fontWeight: 700, fontSize: 18 }}
                >
                  of 100
                </Typography>
              </Typography>
            </Box>
            <ProgresSpinner width={169} height={169} />
          </Box>
          <Typography variant="h3">
            {!flex ? "Improve your GeoJet Index" : "GeoJet Index"}
          </Typography>
        </Box>
        <List disablePadding>
          {data.map((item, index) => (
            <GListItem {...item} key={index} index={index} />
          ))}
        </List>
      </Box>
    </GPaper>
  );
};

export default Geoİndex;
