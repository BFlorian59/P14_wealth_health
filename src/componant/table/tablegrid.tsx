import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef} from '@mui/x-data-grid';
import "../../styles/table.css"

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 20 },
  {
    field: 'firstName',
    headerName: 'First name',
    headerClassName: 'header',
    width: 150,
    hideable: false,
    editable: false
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    headerClassName: 'header',
    width: 150,
    hideable: false
  },
  {
    field: 'Startday',
    headerName: 'Start day',
    headerClassName: 'header',
    width: 150,
    hideable: false
  },
  {
    field: 'Department',
    headerName: 'Department',
    width: 150,
    headerClassName: 'header',
    hideable: false
  },
  {
    field: 'DateBirth',
    headerName: 'Date of Birth',
    width: 150,
    headerClassName: 'header',
    hideable: false
  },
  {
    field: 'Street',
    headerName: 'Street',
    headerClassName: 'header',
    width: 150,
    hideable: false
  },
  {
    field: 'City',
    headerName: 'City',
    headerClassName: 'header',
    width: 150,
    hideable: false
  },
  {
    field: 'State',
    headerName: 'State',
    headerClassName: 'header',
    width: 150,
    hideable: false
  },
  {
    field: 'ZipCode',
    headerName: 'Zip Code',
    headerClassName: 'header',
    width: 150,
    hideable: false
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', Startday:null, Department:null, DateBirth:null, Street:null, City:null, State:null, ZipCode:null},
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', Startday:null, Department:null, DateBirth:null, Street:null, City:null, State:null, ZipCode:null},
];

export default function DataGridDemo() {
  return (
    <Box sx={{ height: 400, width: '92.3%', margin: 'auto', boxShadow: '0 0 20px rgba(0, 0, 0, 0.15)'}}>
      <DataGrid
        rows={rows}
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
      />
    </Box>
  );
}
