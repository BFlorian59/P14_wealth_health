import React from "react"
import { useTable } from "react-table";
import "../../styles/table.css"

function Table() {

    const data = React.useMemo(
        () => [
          {
            col1: 'Hello',
            col2: 'World',
          },
          {
            col1: 'react-table',
            col2: 'rocks',
          },
          {
            col1: 'whatever',
            col2: 'you want',
          },
        ],
        []
      )

      const columns = React.useMemo(
        () => [
          {
            Header: 'First Name',
            accessor: 'col1', // accessor is the "key" in the data
          },
          {
            Header: 'Last Name',
            accessor: 'col2',
          },
          {
            Header: 'Start day',
            accessor: 'col3',
          },
          {
            Header: 'Department',
            accessor: 'col4',
          },
          {
            Header: 'Date of Birth',
            accessor: 'col5',
          },
          {
            Header: 'Street',
            accessor: 'col6',
          },
          {
            Header: 'City',
            accessor: 'col7',
          },
          {
            Header: 'State',
            accessor: 'col8',
          },
          {
            Header: 'Zip Code',
            accessor: 'col9',
          },
        ],
        []
      )

      const tableInstance = useTable({ columns, data })
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = tableInstance
   
    return (
      <table {... getTableProps()}>
        <thead>
          {
            headerGroups.map(headerGroup => (
              <tr {... headerGroup.getHeaderGroupProps()}>
                {
                  headerGroup.headers.map(column =>(
                    <th {... column.getHeaderProps()}>
                      {
                        column.render('Header')
                      }
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        <tbody {... getTableBodyProps()}>
          {
            rows.map(row =>{
              prepareRow(row)
              return(
                <tr {...row.getRowProps()}>
                  {
                    row.cells.map(cell => {
                      return(
                        <td {...cell.getCellProps()}>
                          {cell.render('Cell')}
                        </td>
                      )
                    })
                  }
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
}

export default Table