import React, { useContext, useState } from 'react'
import Card from "../components/Card"
import Box from '@mui/material/Box';
import CustomTable from '../components/CustomTable';
import { tasks } from '../data/Tasks';
import {cards} from '../data/Dashboard'
import { BarChart } from '@mui/x-charts/BarChart';
import Charts from '../components/Charts'
function Dashboard({user}) {
  const [cardData] = useState(cards)
    const taskColumns = [
  { field: "title", header: "Title" },
  { field: "category", header: "Category" },
  { field: "assignedTo", header: "Assigned To" },
  { field: "dueDate", header: "Due Date" },
  { field: "priority", header: "Priority" },
  { field: "status", header: "Status" },
];
  return (
    <dashBoardStyle>
      <Box sx={{ mb: 4 }}>
         <h1>Welcome, {user.name} </h1>
      </Box>
     <Box sx={{ mb: 4 }}>
      <Card data={cardData} />
      
      </Box>

   
    <div style={{display: 'flex',gap: '16px'}}> 
<BarChart
      xAxis={[
        {
          id: 'barCategories',
          data: ['Total Revenue', 'Total Orders', 'New Customers','Pending Orders'],
          height: 50,
          width: 12,
        },
      ]}
      series={[
        {
          data: [2500, 500, 388,345],
        },
      ]}
      height={300}
    />

    <div>

  <h6>
    Student Attendance
  </h6>

  <Charts />

    </div>
    </div>
    

    <CustomTable columns={taskColumns} data={tasks}/>

    </dashBoardStyle>
  )
}

export default Dashboard