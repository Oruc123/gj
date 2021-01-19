import { Box, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";
import React from "react";
import EditButton from "../EditButton";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      background: "#fff",
      position: "relative",
      "& > div:last-child": {
        background: "#fff",
        border: `1px solid  ${theme.palette.border.main}`,
      },
    },
    padding: {
      padding: theme.spacing(3),
    },
  })
);

type EditBlockProps = {
  children: React.ReactNode;
  padding?: boolean;
};
type BlockTop = {
  editHandler?: () => void;
  label: string | React.ReactNode;
  startIcon?: React.ReactNode;
  avatar?: boolean;
  isOpen: boolean;
};

export const BlockTop: React.FC<BlockTop> = ({
  editHandler,
  label,
  startIcon,
  avatar,
  isOpen,
}) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems={avatar ? "flex-start" : "center"}
    >
      <Box marginBottom={1} display="flex" alignItems="center">
        {startIcon && (
          <Box marginRight={2} marginTop={0.5}>
            {startIcon}
          </Box>
        )}
        {!avatar && (
          <Typography color="primary" variant="h4">
            {label}
          </Typography>
        )}
        {avatar && <Box marginTop="-8px">{label}</Box>}
      </Box>
      <Box marginBottom={1} marginTop={avatar ? "-8px" : 0} textAlign="right">
        {!isOpen && <EditButton clickHandler={editHandler} />}
      </Box>
    </Box>
  );
};

const EditBlock: React.FC<EditBlockProps> = ({ children, padding }) => {
  const styles = useStyles();
  return (
    <Box className={clsx(styles.main, padding ? styles.padding : null)}>
      {children}
    </Box>
  );
};
export default EditBlock;
