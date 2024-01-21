import { useQuery } from "react-query";
import { ColumnsData, HouseDto } from "../../app-common/types";
import { fetchHouses } from "../../app-utils/queries";
import { useState } from "react";
import { Column, useTable, useSortBy, useGlobalFilter } from "react-table";
import { camelCaseToTitle, renderArrayData } from "./utils";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { GlobalFilter } from "./GlobalFilter";

export const Table = () => {
  const [columns, setColumns] = useState<readonly Column<ColumnsData>[]>([]);
  const { data, isLoading } = useQuery<HouseDto[], Error>(
    "houses",
    fetchHouses,
    {
      onError: (error) => <>Error: {error}</>,
      onSuccess: (data) => {
        if (data && data.length > 0) {
          const rawColumns = Object.keys(data[0])
            .slice(1)
            .map((key) => ({
              Header: key,
              accessor: key as keyof ColumnsData,
            }));
          const updatedColumns = rawColumns.map((column) => ({
            ...column,
            Header: camelCaseToTitle(column.Header),
          }));
          setColumns(updatedColumns);
        }
      },
    }
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy
  );

  if (isLoading) {
    return <p> Loading... </p>;
  }

  const { globalFilter } = state;

  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table className="table" {...getTableProps()}>
        <thead>
          {headerGroups.map((hg) => (
            <tr {...hg.getHeaderGroupProps()}>
              {hg.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {column.isSorted &&
                    (column.isSortedDesc ? (
                      <IoIosArrowDown />
                    ) : (
                      <IoIosArrowUp />
                    ))}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  const accessor = cell.column.id as string;
                  const updatedData = renderArrayData(accessor, cell.value);
                  return <td {...cell.getCellProps()}>{updatedData}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
