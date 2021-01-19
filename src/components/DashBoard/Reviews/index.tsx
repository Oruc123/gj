import {
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
  Box,
  Button,
} from "@material-ui/core";
import ChatBubbleOutlineRoundedIcon from "@material-ui/icons/ChatBubbleOutlineRounded";
import React from "react";
import TopSortBottoms from "./TopSortBottoms";
import Review from "./Review";
import Filters from "./Filters";
import { ctx } from "../../../context";
import { ISpinner } from "../../Icons";
const Reviews = () => {
  const { mobile, tablet } = React.useContext(ctx);
  const theme = useTheme();
  const tablet2 = useMediaQuery(theme.breakpoints.down(1134));
  const [open, setOpen] = React.useState(false);
  const openFilter = React.useCallback(() => {
    setOpen(true);
  }, [open]);
  const closeFilter = React.useCallback(() => {
    setOpen(false);
  }, [open]);
  return (
    <Grid container alignItems="stretch" spacing={2}>
      <Grid item md={8}>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12} sm={3}>
            {!tablet && <Box marginTop={2}></Box>}
            <Typography variant="h1">Reviews</Typography>
          </Grid>
          <Grid xs={12} item sm={9}>
            <TopSortBottoms openFilter={openFilter} />
          </Grid>
        </Grid>

        <Review />
        <Review isReplied />
        <Review openDialog />

        <Box marginY={2} bgcolor="#fff">
          <Button
            startIcon={
              <ChatBubbleOutlineRoundedIcon
                style={{ color: "#6C82AC", fontSize: 16 }}
              />
            }
            fullWidth
            style={{ fontSize: 13 }}
          >
            Load More
          </Button>
        </Box>
        <Box
          marginY={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgcolor="#fff"
          paddingY={1.5}
        >
          <Box marginRight={1.5}>
            <ISpinner width="16px" height="16px" />
          </Box>
          <Typography style={{ fontSize: 13 }} variant="h5">
            Loading ...
          </Typography>
        </Box>
      </Grid>

      {tablet && (
        <Grid item xs={4}>
          <Filters />
        </Grid>
      )}
      {!tablet && (
        <Filters
          drawOpen={open}
          swipp
          openFilter={openFilter}
          closeFilter={closeFilter}
        />
      )}
    </Grid>
  );
};
export default Reviews;
