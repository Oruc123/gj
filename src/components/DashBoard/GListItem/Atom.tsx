import React from "react";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Avatar, Chip, ListItem } from "@material-ui/core/";

export const GAvatar = withStyles((theme: Theme) =>
  createStyles({
    root: {
      marginRight: 10,
      background: theme.palette.tuscle.main,
      color: theme.palette.primary.main,
      fontSize: 14,
      fontWeight: 500,
      width: 24,
      height: 24,
      transform: "translatey(3px)",
    },
  })
)((props) => <Avatar {...props} />);

export const StyledListItem = withStyles((theme: Theme) =>
  createStyles({
    root: {
      alignItems: "flex-start",
      paddingBottom: 0,
      paddingTop: 0,
      marginBottom: 20,
      "&:last-child": {
        marginBottom: 4,
      },
    },
  })
)((props: { disableGutters: boolean }) => <ListItem {...props} />);

export const GChip = withStyles((theme: Theme) =>
  createStyles({
    root: {
      background: theme.palette.tuscle.main,
      fontWeight: 500,
      color: theme.palette.primary.main,
    },
  })
)((props: { label: string }) => <Chip color="default" {...props} />);
