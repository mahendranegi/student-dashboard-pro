import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
} from "@mui/material";

const rows = [
  {
    id: 1,
    title: "Complete React Dashboard",
    description: "Finish the student dashboard UI",
    category: "Development",
    dueDate: "28 Jul 2026",
    assignedTo: "Mahendra",
    status: "In Progress",
  },
  {
    id: 2,
    title: "Design Login Page",
    description: "Create responsive login screen",
    category: "Design",
    dueDate: "30 Jul 2026",
    assignedTo: "Rahul",
    status: "Pending",
  },
  {
    id: 3,
    title: "Fix Calendar Bugs",
    description: "Resolve date selection issue",
    category: "Bug Fix",
    dueDate: "02 Aug 2026",
    assignedTo: "Amit",
    status: "Completed",
  },
];

export default function CustomTable() {
  return (
    <TableContainer component={Paper} elevation={3}>
      <Table>
        <TableHead>
          <TableRow sx={{ background: "#f5f7fb" }}>
            <TableCell><b>Task Title</b></TableCell>
            <TableCell><b>Description</b></TableCell>
            <TableCell><b>Category</b></TableCell>
            <TableCell><b>Due Date</b></TableCell>
            <TableCell><b>Assigned To</b></TableCell>
            <TableCell><b>Status</b></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} hover>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.dueDate}</TableCell>
              <TableCell>{row.assignedTo}</TableCell>
              <TableCell>
                <Chip
                  label={row.status}
                  color={
                    row.status === "Completed"
                      ? "success"
                      : row.status === "In Progress"
                      ? "primary"
                      : "warning"
                  }
                  size="small"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}