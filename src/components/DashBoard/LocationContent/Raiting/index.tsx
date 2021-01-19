import {
  makeStyles,
  Paper,
  createStyles,
  Typography,
  Theme,
  Box,
  Button,
  Divider,
} from "@material-ui/core";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import React from "react";
import ProogressBar from "./Progress";
import GRaiting from "../../GRaiting";
import CPaper from "../../../Elements/CPaper";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    raitingBlock: {
      borderRadius: 4,
      border: `1px solid ${theme.palette.border.main}`,
      background: "#fff",
    },
    raitingFirstBlock: {
      borderRight: `1px solid ${theme.palette.border.main}`,
    },
    increase: {
      color: theme.palette.success.main,
      marginRight: 2,
    },
  })
);
const LoactionRaiting = () => {
  const classes = useStyles();
  return (
    <CPaper height noPadding>
      <Box paddingX={3} paddingY={2}>
        <Typography style={{ color: "#666666", fontSize: 18 }} variant="h2">
          Average rating
        </Typography>
        <Box display="flex" alignItems="center" marginTop={2}>
          <Box marginRight={3}>
            <Typography style={{ fontSize: 38 }} variant="h2">
              4.6
            </Typography>
          </Box>
          <GRaiting value={3.5} />
        </Box>
        <Box display="flex" alignItems="center" marginTop={1}>
          <Box display="flex" alignItems="center" marginRight={3}>
            <ArrowDropUpIcon className={classes.increase} />
            <Typography variant="body1" className={classes.increase}>
              100%
            </Typography>
          </Box>
          <Typography
            style={{ fontSize: 12, color: "#666666", fontWeight: 400 }}
            variant="body1"
          >
            Rating increased for 1 month
          </Typography>
        </Box>
        <Box marginTop={2}>
          <Button color="primary" variant="contained">
            Get more reviews
          </Button>
        </Box>
      </Box>
      <Divider />
      <Box paddingX={3} paddingY={2}>
        <Typography style={{ color: "#666666", fontSize: 16 }} variant="h2">
          Total: 1 250 650 reviews
        </Typography>
        <Box marginY={2}>
          <ProogressBar />
        </Box>
        <Button
          href="#"
          startIcon={
            <ChatBubbleOutlineOutlinedIcon
              style={{ fontSize: 16, marginRight: 10 }}
            />
          }
          color="primary"
        >
          Get more rewievs
        </Button>
      </Box>
    </CPaper>
  );
};

export default LoactionRaiting;
