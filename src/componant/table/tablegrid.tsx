import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridToolbarFilterButton,} from '@mui/x-data-grid';
import "../../styles/table.css"
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';


function escapeRegExp(value) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

const colonne: GridColDef[] = [

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

interface QuickSearchToolbarProps {
  clearSearch: () => void;
  onChange: () => void;
  value: string;
}


function QuickSearchToolbar(props: QuickSearchToolbarProps) {

  return (
    <div>
      <div>
        <GridToolbarFilterButton />
      </div>
      <TextField
        variant="standard"
        value={props.value}
        onChange={props.onChange}
        placeholder="Search…"
        InputProps={{
          startAdornment: <SearchIcon fontSize="small" />,
          endAdornment: (
            <IconButton
              title="Clear"
              aria-label="Clear"
              size="small"
              style={{ visibility: props.value ? 'visible' : 'hidden' }}
              onClick={props.clearSearch}
            >
              <ClearIcon fontSize="small" />
            </IconButton>
          ),
        }}
      />
    </div>
  );
}


export default function TableGrid() {
  const employee = localStorage.getItem('employee-info')

  if(employee){
    var tab_emp = JSON.parse((employee)|| '{}');
  }

  const [searchText, setSearchText] = React.useState('');
  const [rows, setRows] = React.useState<any[]>(tab_emp);

  const requestSearch = (searchValue: string) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
    const filteredRows = tab_emp.filter((row: any) => {
      return Object.keys(row).some((field: any) => {
        return searchRegex.test(row[field].toString());
      });
    });
    setRows(filteredRows);
  };
 
  return employee ? (
    <Box sx={{ height: 400, width: '92.3%', margin: 'auto', boxShadow: '0 0 20px rgba(0, 0, 0, 0.15)'}}>
      <DataGrid 
        getRowId={(row: any) =>  row.firstname + row.lastname}
        components={{ Toolbar: QuickSearchToolbar }}
        rows={rows}
        columns={colonne}
        componentsProps={{
          toolbar: {
            value: searchText,
            onChange: (event) => requestSearch((event.target as HTMLInputElement).value),
            clearSearch: () => requestSearch(''),
          },
        }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
          
        }}
        
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
        disableColumnSelector
        disableColumnMenu
        disableColumnFilter
      />
    </Box>
  ):(
    <Box sx={{ height: 400, width: '92.3%', margin: 'auto', boxShadow: '0 0 20px rgba(0, 0, 0, 0.15)'}}>

    </Box>
  )
}
