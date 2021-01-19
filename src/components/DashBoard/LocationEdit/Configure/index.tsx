import React from "react";

import Location from "./Location";
import Hours from "./Hours/";
import Contacts from "./Contacts/";
import Booking from "./Contacts/Booking";
import AdditionalHours from "./AdditionalHours";
import Description from "./Description/";

const Configure = () => {
  return (
    <>
      <Location />
      <Hours />
      <AdditionalHours />
      <Contacts />
      <Booking />
      <Description />
    </>
  );
};

export default Configure;
