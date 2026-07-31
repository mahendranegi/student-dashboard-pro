
import React from 'react'

import { PieChart, pieClasses } from '@mui/x-charts/PieChart';
const data = [
  { label: "Present", value: 780, color: "#4CAF50" },
  { label: "Absent", value: 120, color: "#F44336" },
  { label: "On Leave", value: 60, color: "#FF9800" },
  { label: "New Admission", value: 40, color: "#2196F3" },
];

const sizing = {
  margin: { right: 5 },
  width: 200,
  height: 200,
  hideLegend: true,
};
const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params) => {
  const percent = params.value / TOTAL;
  return `${(percent * 100).toFixed(0)}%`;
};

function Charts() {
  return (
    <PieChart
      series={[
        {
          outerRadius: 80,
          data,
          arcLabel: getArcLabel,
        },
      ]}
      sx={{
        [`& .${pieClasses.arcLabel}`]: {
          fill: 'white',
          fontSize: 14,
        },
      }}
      {...sizing}
    />
  )
}

export default Charts









