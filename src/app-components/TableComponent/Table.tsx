import { useQuery } from "react-query";
import { ColumnsData, HouseDto } from "../../app-common/types";
import { fetchHouses } from "../../app-utils/queries";
import { useState } from "react";
import {
  useReactTable,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";
import { camelCaseToTitle } from "./utils";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { TableHeader } from "../TableHeader/TableHeader";

export const Table = () => {
  const [columns, setColumns] = useState([]);
  const [houses, setHouses] = useState<HouseDto[]>([]);
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState<
    { id: string; value: string }[]
  >([]);
  const { data, isLoading } = useQuery<HouseDto[], Error>(
    "houses",
    fetchHouses,
    {
      onError: (error) => <>Error: {error}</>,
      onSuccess: (data) => {
        if (data && data.length > 0) {
          const columnsToInclude = ["name", "animal", "ghost", "commonRoom"];

          const updatedColumns = columnsToInclude
            .map((key) => {
              return {
                id: key,
                header: key,
                accessorKey: key as keyof ColumnsData,
                enableColumnFilter: key === "animal",
                filterFn:
                  key === "animal"
                    ? (row, columnId, filterValue) => {
                        if (filterValue.length === 0) return true;
                        const value = row.getValue(columnId);
                        return filterValue.includes(value);
                      }
                    : null,
              };
            })
            .map((column) => ({
              ...column,
              header: camelCaseToTitle(column.header),
            }));

          setColumns(updatedColumns);
          setHouses(data);
        }
      },
    }
  );

  const table = useReactTable({
    columns,
    data: houses,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      columnFilters: columnFilters,
      sorting: sorting,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
  });

  const uniqueAnimals = [
    "Lion",
    "Eagle",
    "Badger",
    "Serpent",
    "Dolphin",
    "Giraffe",
    "Armadillo",
    "Unicorn",
  ];

  if (isLoading) {
    return <p> Loading... </p>;
  }

  return (
    <div className="table_container">
      <TableHeader
        uniqueAnimals={uniqueAnimals}
        setColumnFilters={setColumnFilters}
        setHouses={setHouses}
      />
      <table className="table">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={
                    header.id === "name"
                      ? header.column.getToggleSortingHandler("name")
                      : () => {}
                  }
                  style={{ cursor: header.id === "name" ? "pointer" : "" }}
                >
                  <>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {
                      { asc: <IoIosArrowUp />, desc: <IoIosArrowDown /> }[
                        (header.column.getIsSorted() as "asc" | "desc") ?? null
                      ]
                    }
                  </>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
