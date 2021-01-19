import UbuntuRegular from "../assets/fonts/Ubuntu-Regular.ttf";
import UbuntuMedium from "../assets/fonts/Ubuntu-Medium.ttf";
import UbuntuBold from "../assets/fonts/Ubuntu-Bold.ttf";

const ubuntuRegular = {
    fontFamily: "Ubuntu",
    fontStyle: "normal",
    fontDisplay: "swap",
    fontWeight: 400,
    src: `
      local('Raleway'),
      local('Raleway-Regular'),
      url(${UbuntuRegular}) format('truetype')
    `,
  },
  ubuntuMedium = {
    fontFamily: "Ubuntu",
    fontStyle: "normal",
    fontDisplay: "swap",
    fontWeight: 500,
    src: `
      local('Ubuntu'),
      local('Ubuntu-Medium'),
      url(${UbuntuMedium}) format('truetype')
    `,
  },
  ubuntuBold = {
    fontFamily: "Ubuntu",
    fontStyle: "normal",
    fontDisplay: "swap",
    fontWeight: 700,
    src: `
      local('Ubuntu'),
      local('Ubuntu-Bold'),
      url(${UbuntuBold}) format('truetype')
    `,
  };

const fonts = [ubuntuRegular, ubuntuMedium, ubuntuBold];
export default fonts;
