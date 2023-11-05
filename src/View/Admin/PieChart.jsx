import React from "react";
import { Chart } from "react-google-charts";

export const data = [    
    ['Reason', 'Amount'],
    ['CreditScore', 4028], 
    ['ltv', 4748], 
    ['dti', 7457], 
    ['fedti', 5586],
];

export const options = {
  title: "My Daily Activities",
};

export function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      maxheight={"400px"}
    />
  );
}