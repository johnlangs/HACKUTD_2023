import React from "react";
import { Chart } from "react-google-charts";

export const data = [    
    ['Reason', 'Amount'],
    ['Credit Score', 4028], 
    ['LTV', 4748], 
    ['DTI', 7457], 
    ['FEDTI', 5586],
];

export const options = {
  title: "Rejection Reasons",
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