import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef} from '@mui/x-data-grid';
import "../../styles/table.css"


const columns: GridColDef[] = [

  {
    field: 'firstname',
    headerName: 'First name',
    headerClassName: 'header',
    width: 150,
    hideable: false,
  },
  {
    field: 'lastname',
    headerName: 'Last name',
    headerClassName: 'header',
    width: 150,
    hideable: false
  },
  {
    field: 'startdate',
    headerName: 'Start day',
    headerClassName: 'header',
    width: 150,
    hideable: false
  },
  {
    field: 'department',
    headerName: 'Department',
    width: 150,
    headerClassName: 'header',
    hideable: false
  },
  {
    field: 'datebirth',
    headerName: 'Date of Birth',
    width: 150,
    headerClassName: 'header',
    hideable: false
  },
  {
    field: 'street',
    headerName: 'Street',
    headerClassName: 'header',
    width: 150,
    hideable: false
  },
  {
    field: 'city',
    headerName: 'City',
    headerClassName: 'header',
    width: 200,
    hideable: false
  },
  {
    field: 'state',
    headerName: 'State',
    headerClassName: 'header',
    width: 150,
    hideable: false
  },
  {
    field: 'zip',
    headerName: 'Zip Code',
    headerClassName: 'header',
    width: 150,
    hideable: false
  },
];

export default function TableGrid() {
  const employee = localStorage.getItem('employee-info')

  if(employee){
    var tab_emp = JSON.parse((employee)|| '{}');
    console.log(tab_emp)
  }
  return (
    <Box sx={{ height: 400, width: '92.3%', margin: 'auto', boxShadow: '0 0 20px rgba(0, 0, 0, 0.15)'}}>
      <DataGrid 
        rowSelectionModel="Single"
        getRowId={(row: any) =>  row.firstname + row.lastname}
        rows={tab_emp}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          }
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
        disableColumnSelector
        disableColumnMenu
        disableColumnFilter
      />
    </Box>
  )
}
