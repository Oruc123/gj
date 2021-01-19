import { Box, RadioGroup, Typography, Grid, Link } from "@material-ui/core";
import React, { useState } from "react";
import Wrapper from "../Wrapper";
import CInput from "../../Form/CInput";
import useStyles from "./Atom";
import RadioItems from "../RadioItems";
import GSelect from "./GSelect";

const items = [
  {
    title:
      " Most companies are already present on Google or Yandex maps. And yours, soon all, too. We will try to find it.",
    name: "Starbucks",
    category: "Restaurant",
    address: " 12793-50Th St Nw",
    value: "female",
  },
  {
    name: "Starbucks",
    category: "Restaurant",
    address: " 12793-50Th St Nw",
    value: "sdfsfd",
  },
  {
    name: "Starbucks",
    category: "Restaurant",
    address: " 12793-50Th St Nw",
    value: "cgh",
  },
  {
    name: "Starbucks",
    category: "Restaurant",
    address: " 12793-50Th St Nw",
    value: "test2",
  },
  {
    name: "Starbucks",
    category: "Restaurant",
    address: " 12793-50Th St Nw",
    value: "test",
  },
];

const StepTwo = ({ contorllers }: { contorllers: React.ReactNode }) => {
  const [value, setValue] = useState("female");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  const { itemContainer, itemTitle, radioGroup, itemStyle } = useStyles();
  return (
    <>
      <Typography variant="body2" className={itemTitle}>
        Find your company data on the cards, if it already exists, or create it.
      </Typography>

      <Wrapper>
        <CInput label="Enter project name" />
        <Box className={itemContainer}>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value}
            classes={{ root: radioGroup }}
            onChange={handleChange}
          >
            {items.map((item, index) => (
              <RadioItems
                key={index}
                title={item.title}
                adress={item.address}
                name={item.name}
                value={item.value}
                category={item.category}
                selectedValue={value}
              />
            ))}
          </RadioGroup>

          <Box className={itemStyle} textAlign="center">
            <Link href="/" variant="body1">
              Show more
            </Link>
          </Box>
          <Box className={itemStyle}>{contorllers}</Box>
          <Box className={itemStyle}>
            <Typography
              style={{ fontSize: 14 }}
              variant="body1"
              component="span"
            >
              Your company is not on the list?
            </Typography>
            <Link variant="body1"> Create it now</Link>
          </Box>
          <Box
            style={{ paddingBottom: 0, marginBottom: 0 }}
            className={itemStyle}
          >
            <Grid container alignItems="center" justify="space-between">
              <Grid item xs={12} sm={6}>
                <Link
                  href="/import"
                  style={{ fontSize: 16, fontWeight: 700 }}
                  variant="body1"
                >
                  Or import
                </Link>
              </Grid>
              <Grid xs={12} item sm={6}>
                <GSelect />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Wrapper>
    </>
  );
};

export default StepTwo;
