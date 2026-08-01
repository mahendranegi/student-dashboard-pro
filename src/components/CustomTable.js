import { useState } from "react";
import * as React from "react";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
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
import SimpleDialog from "./SimpleDialog";

export default function CustomTable({ columns, data,setFilter,onDelete, }) {
 
 
  return (
    <TableContainer component={Paper} elevation={3}>
      <Table>
        <TableHead>
          <TableRow sx={{ background: "#f5f7fb" }}>
            {columns.map((col) => {
              return (
                <TableCell key={col.field}>
                  <b>{col.header}</b>
                </TableCell>
              );
            })}
            <TableCell>
              <b>Action</b>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((row,id) => (
            <TableRow key={row.id} hover>
            
              {columns.map((col) => (
                <TableCell key={col.field}>{row[col.field]}</TableCell>
              ))}
              <TableCell>
                <EditIcon />
                <DeleteIcon onClick={()=>onDelete(row.id)}/>
                
                
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
