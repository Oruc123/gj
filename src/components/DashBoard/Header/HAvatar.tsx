import React from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  Box,
  Avatar,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";
import { IChevronDown, IChevronUp, ILogout, IUser } from "../../Icons";
const useStyes = makeStyles((theme: Theme) =>
  createStyles({
    iconButton: {
      padding: 0,
      marginLeft: "auto",
      marginTop: 4,
      "&:hover": {
        background: "transparent",
      },
    },
    circle: {
      borderRadius: 50,
      border: "2px solid #6C82AC",
    },
    root: {
      display: "flex",
      alignItems: "flex-start",
    },
    avatar: {
      background: "#B3C0D9",
      borderRadius: 3,
      fontSize: 10,
      fontWeight: 900,
      width: 24,
      marginRight: 8,
      height: 24,
    },
    name: {
      color: "#57647B",
      fontSize: 14,
      marginTop: 4,
    },
    avatarButtons: {
      color: "#57647B",
      fontSize: 14,
      marginTop: theme.spacing(0.5),
      marginBottom: theme.spacing(0.5),
    },
  })
);
const HAvatar = () => {
  const classes = useStyes();
  const wrapperRef: any = React.useRef(null);
  const [isOpen, setOpen] = React.useState(false);
  const openDropdown = (): void => {
    setOpen(!isOpen);
  };
  React.useEffect(() => {
    function handleClickOutside(event: any) {
      if (wrapperRef.current && !wrapperRef?.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div ref={wrapperRef}>
      <Box className={classes.root}>
        <Avatar className={classes.avatar}>MD</Avatar>
        <Box>
          <Typography className={classes.name} variant="h4">
            Mason Donaldson
          </Typography>
        </Box>
        <IconButton onClick={openDropdown} className={classes.iconButton}>
          {!isOpen && <IChevronDown size={14} />}
          {isOpen && <IChevronUp size={14} />}
        </IconButton>
      </Box>
      {isOpen && (
        <Box marginTop={2} marginLeft={2}>
          <Box>
            <Button
              classes={{ startIcon: classes.circle }}
              startIcon={<IUser />}
              className={classes.avatarButtons}
            >
              Profile
            </Button>
          </Box>
          <Box>
            <Button startIcon={<ILogout />} className={classes.avatarButtons}>
              LogOut
            </Button>
          </Box>
        </Box>
      )}
    </div>
  );
};
export default HAvatar;
