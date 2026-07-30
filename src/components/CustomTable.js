import { useState } from "react";
import * as React from "react";
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
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


 

export default function CustomTable({columns,data}) {
  const [open, setOpen] = useState(false);
 const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};
  return (
    <TableContainer component={Paper} elevation={3}>
      <Table>
        <TableHead>
          <TableRow sx={{ background: "#f5f7fb" }}>
            {columns.map((col)=>{
              return <TableCell key = {col.field}><b>{col.header}</b></TableCell>
            })}
              <TableCell>
              <b>Action</b>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id} hover>
              {columns.map((col)=>(
                <TableCell key={col.field}>{row[col.field]}</TableCell>
              ))}
                <TableCell><EditIcon /> <MoreVertIcon onClick={handleClickOpen}/>
                    <SimpleDialog
    open={open}
    onClose={handleClose}
  />
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}