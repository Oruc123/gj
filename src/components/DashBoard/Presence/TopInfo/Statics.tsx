import React from "react";
import { Box, Link, Typography } from "@material-ui/core";
import CPaper from "../../../Elements/CPaper";
import GProgressSpinner from "../../../Elements/GProgressSpinner";
const Statics = () => {
  return (
    <CPaper height>
      <Typography variant="h2">Статистика</Typography>
      <Box marginY={2} alignItems="center" display="flex">
        <Box marginRight={3}>
          <GProgressSpinner
            value={75}
            width={64}
            rotate
            text={
              <Typography
                component="span"
                style={{ fontWeight: 500 }}
                variant="body2"
              >
                34%
              </Typography>
            }
          />
        </Box>
        <Box>
          <Typography variant="body2">Присутствие на геосервисах</Typography>
          <Typography variant="subtitle1">
            It shows the level of coincidence of information between the system
            and the data on the geoservice.
          </Typography>
        </Box>
      </Box>
      <Box alignItems="center" display="flex">
        <Box marginRight={3}>
          <GProgressSpinner
            full
            value={75}
            width={64}
            rotate
            text={
              <>
                <Typography component="span" color="primary" variant="h3">
                  5{" "}
                  <Typography
                    component="span"
                    style={{ color: "#C7C7C7" }}
                    variant="h3"
                  >
                    / 7
                  </Typography>
                </Typography>
              </>
            }
          />
        </Box>
        <Box>
          <Typography variant="body2">Присутствие на геосервисах</Typography>
          <Box marginTop={1}>
            <Link href="#" color="primary">
              Добавить геосервис в систему
            </Link>
          </Box>
        </Box>
      </Box>
    </CPaper>
  );
};
export default Statics;
