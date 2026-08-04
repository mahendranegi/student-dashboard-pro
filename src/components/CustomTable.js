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

export default function CustomTable({ columns, data,setFilter,onDelete,onEdit }) {
 console.log(data,'Student data here')
 
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
                <div style={{display: 'flex',gap: '12px',cursor: 'pointer'}}>
                  <EditIcon onClick={()=>onEdit(row.id)} sx={{ color: "#0288d1", cursor: "pointer" }}/>
                <DeleteIcon onClick={()=>onDelete(row.id)} sx={{ color: "#d32f2f", cursor: "pointer" }}/>
                </div>
                
                
                
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
