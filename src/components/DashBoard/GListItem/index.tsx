import { Typography, Box, ListItemAvatar, Link } from "@material-ui/core";
import React from "react";
import { GAvatar, StyledListItem, GChip } from "./Atom";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
interface ItemProps {
  index: number;
  persent: string;
  title: string;
  subTitle: string;
  path: string;
}
const GListItem: React.FC<ItemProps> = ({
  index,
  persent,
  title,
  subTitle,
}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down(1024));
  const matches2 = useMediaQuery(theme.breakpoints.between(1366, 1388));
  return (
    <StyledListItem disableGutters={true}>
      <ListItemAvatar style={{ minWidth: 38 }}>
        <GAvatar>{index + 1}</GAvatar>
      </ListItemAvatar>
      <Box paddingRight={2}>
        <Link style={{ color: "#283BC1" }} variant="body1">
          {title}
        </Link>
        <Typography
          style={{ maxWidth: 302, lineHeight: "12.79px" }}
          variant="subtitle1"
        >
          {subTitle}
        </Typography>
      </Box>
      {!matches && !matches2 && <GChip label={persent} />}
    </StyledListItem>
  );
};

export default GListItem;
