import "./server_alert_table.css";
import fakeData from "./MOCK_DATA.json";
import * as React from "react";
import { useTable } from "react-table";

function ServerAlertTable() {
  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "Server_ID",
        accessor: "serverID",
      },
      {
        Header: "Alert_Type",
        accessor: "Alert Type",
      },
      {
        Header: "Serverity_Level",
        accessor: "Severity Level",
      },
      {
        Header: "Time_Of_Occurance",
        accessor: "Time of Occurrence",
      },
      {
        Header: "Description",
        accessor: "Description",
      },
      {
        Header: "Status",
        accessor: "Status",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="server-wrapper p-2">
      <table {...getTableProps()} className="table table-hover">
        <thead className="thead-dark">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} scope="column">
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} scope="row">
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ServerAlertTable;
