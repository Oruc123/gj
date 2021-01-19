import React from "react";
import { Line, defaults } from "react-chartjs-2";

console.log(defaults.global.layout);
const lineOptions = {
  // layout: {
  //   padding: { right: 0 },
  // },
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        // stacked: true,
        gridLines: {
          display: false,
        },
        ticks: {
          beginAtZero: true,
          // Return an empty string to draw the tick line but hide the tick label
          // Return `null` or `undefined` to hide the tick line entirely
          userCallback(value) {
            // Convert the number to a string and splite the string every 3 charaters from the end
            value = value.toString();
            value = value.split(/(?=(?:...)*$)/);

            // Convert the array to a string and format the output
            value = value.join(".");
            return null;
          },
        },
      },
    ],
  },
  legend: {
    display: false,
  },
  tooltips: {
    enabled: false,
  },
};
export default ({ dataOut }) => {
  const lineData = () => {
    return {
      labels: ["", "", "", "", "", "", ""],
      datasets: [
        {
          label: "My First dataset",
          fill: true,
          lineTension: 0.5,
          backgroundColor: "rgba(69, 157, 28, 0.2)",
          borderColor: "#459D1C",
          borderCapStyle: "butt",
          borderDash: [],
          borderWidth: 1,
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "#459D1C",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 0,
          pointHoverRadius: 0,
          pointHoverBackgroundColor: "#459D1C",
          pointHoverBorderColor: "#459D1C",
          pointHoverBorderWidth: 2,
          pointRadius: 0,
          pointHitRadius: 0,
          data: dataOut,
        },
      ],
    };
  };
  return (
    <Line width={222} height={137} data={lineData()} options={lineOptions} />
  );
};
