import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Box, Typography } from "@mui/material";

const data = [
  { id: 0, value: 780, label: "Present", color: "#4CAF50" },
  { id: 1, value: 120, label: "Absent", color: "#F44336" },
  { id: 2, value: 60, label: "On Leave", color: "#FF9800" },
  { id: 3, value: 40, label: "New Admission", color: "#2196F3" },
];

const total = data.reduce((sum, item) => sum + item.value, 0);

function Charts() {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        borderRadius: 8,
        p: 3,
        border: '1px solid #f6f6f6'
      }}
    >
      <Typography
        variant="h6"
        fontWeight={600}
        textAlign="center"
        mb={2}
      >
        Student Overview
      </Typography>

      <PieChart
        width={340}
        height={260}
        series={[
          {
            data,
            innerRadius: 60,
            outerRadius: 100,
            paddingAngle: 3,
            cornerRadius: 8,
            startAngle: -90,
            endAngle: 270,
            cx: 170,
            cy: 120,
          },
        ]}
        slotProps={{
          legend: {
            direction: "column",
            position: {
              vertical: "middle",
              horizontal: "right",
            },
          },
        }}
      />

      <Typography
        textAlign="center"
        variant="h5"
        fontWeight={700}
      >
        {total}
      </Typography>

      <Typography
        textAlign="center"
        color="text.secondary"
      >
        Total Students
      </Typography>
    </Box>
  );
}

export default Charts;