import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  [
    "Element",
    "Density",
    { role: "style" },
    {
      sourceColumn: 0,
      role: "annotation",
      type: "string",
      calc: "stringify",
    },
  ],
  ["Approved", 1135, "green", null],
  ["Denined", 8865, "red", null],
];

export const options = {
  title: "Loan Approval/Rejection Results",
  width: 600,
  height: 400,
  bar: { groupWidth: "95%" },
  legend: { position: "none" },
};

export function BarChart() {
  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}