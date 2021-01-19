import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Box, Link, Typography } from "@material-ui/core";
import { ReviewButtons } from "./Button";
import Reply from "./Reply";
import ReplyDialog from "./ReplyDialog";
import { ITag, IMessageRounded } from "../../../Icons";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(0, 8),
      marginTop: theme.spacing(1),
      [theme.breakpoints.down("md")]: {
        paddingRight: 24,
      },
      [theme.breakpoints.down("sm")]: {
        padding: 0,
      },
    },

    buttons: {
      color: theme.palette.violet.main,
      marginRight: theme.spacing(3),
    },
    text: {
      fontWeight: 400,
      fontSize: 15,
    },
    replyContent: {
      position: "relative",
      background: "#F0F6FF",
      padding: theme.spacing(3),
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(3),
      marginLeft: theme.spacing(8),

      [theme.breakpoints.down("sm")]: {
        marginLeft: 0,
        padding: 16,
      },
    },
    replyContentTop: {
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "& > div:first-child": {
          order: 1,
        },
      },
    },
    replyContentAnswer: {
      marginTop: "-16px",
      [theme.breakpoints.down("sm")]: {
        marginTop: 0,
      },
    },

    textField: {
      fontSize: 14,
      fontWeight: 400,
      borderColor: "red",
      marginTop: theme.spacing(2),
      background: "#fff",
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.border.main,
      },
    },
  })
);

const ReviewContent = ({
  isReplied,
  openDialog,
}: {
  isReplied?: boolean;
  openDialog?: boolean;
}) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Box width="95%">
          <Typography className={classes.text}>
            Посещала офис для консультации по моему договору, имелось несколько
            вопросов. Сотрудник предоставил мне исчерпывающую информацию по всем
            моим вопросам, общался вежливо, что оставило только положительные
            впечатления об офисе и компании в целом. Спасибо за такой подход!
          </Typography>
        </Box>
        <Box marginY={2}>
          <Typography
            style={{ fontSize: 13, marginRight: 16 }}
            variant="h4"
            component="span"
          >
            Google Maps
          </Typography>
          <Link style={{ fontSize: 13 }} color="primary" variant="h4">
            Hermitage Square
          </Link>
        </Box>

        {!isReplied && !openDialog && (
          <Box>
            <ReviewButtons icon={<IMessageRounded />} label="Reply" />
            <ReviewButtons icon={<ITag />} label="Add tags" />
          </Box>
        )}
      </Box>
      {openDialog && <ReplyDialog />}
      {isReplied && <Reply />}
    </>
  );
};

export default ReviewContent;
