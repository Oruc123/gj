import React from "react";
import Rating from "@material-ui/lab/Rating";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import StarRoundedIcon from "@material-ui/icons/StarRounded";

const GRaiting = ({ value }: { value: number }) => {
  return (
    <Rating
      readOnly
      defaultValue={value}
      precision={0.5}
      size="medium"
      icon={<StarRoundedIcon style={{ color: "#F48D42" }} />}
      emptyIcon={<StarBorderRoundedIcon style={{ color: "#F48D42" }} />}
    />
  );
};

export default GRaiting;
