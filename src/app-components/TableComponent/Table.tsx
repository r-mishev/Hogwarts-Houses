import { useQuery } from "react-query";
import { ColumnsData, HouseDto } from "../../app-common/types";
import { fetchHouses } from "../../app-utils/queries";
import { useState } from "react";
import { TableBody } from "./TableBody";
import { TableHead } from "./TableHead";

export const Table = () => {
  const [columns, setColumns] = useState<ColumnsData[]>([]);
  const { data } = useQuery<HouseDto[], Error>("houses", fetchHouses, {
    onError: (error) => <>Error: {error}</>,
    onSuccess: (data) => {
      if (data && data.length > 0) {
        setColumns(
          Object.keys(data[0])
            .slice(1)
            .map((key) => ({
              label: key,
              accessor: key,
            }))
        );
      }
    },
  });

  return (
    <>
      {data && (
        <table className="table">
          <TableHead columns={columns} />
          <TableBody columns={columns} tableData={data} />
        </table>
      )}
    </>
  );
};
