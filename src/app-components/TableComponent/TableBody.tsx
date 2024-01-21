import {
  ColumnsData,
  HouseDto,
  HouseHeadDto,
  TraitDto,
} from "../../app-common/types";

type TableBodyProps = {
  columns: ColumnsData[];
  tableData: HouseDto[];
};

export const TableBody = ({ columns, tableData }: TableBodyProps) => {
  const renderHeads = (heads: HouseHeadDto[]): string => {
    return heads.map((head) => `${head.firstName} ${head.lastName}`).join(", ");
  };

  const renderTraits = (traits: TraitDto[]) => {
    return traits.map((trait) => trait.name).join(", ");
  };

  const renderArrayData = (accessor: string, rawData: unknown[]): string => {
    if (accessor === "heads") {
      return renderHeads(rawData as HouseHeadDto[]);
    } else if (accessor === "traits") {
      return renderTraits(rawData as TraitDto[]);
    } else {
      return JSON.stringify(rawData);
    }
  };

  return (
    <tbody>
      {tableData.map((data) => {
        return (
          <tr key={data.id}>
            {columns.map(({ accessor }) => {
              const rawData = data[accessor as keyof HouseDto];
              const tData =
                rawData instanceof Array
                  ? renderArrayData(accessor, rawData)
                  : rawData || "---";
              return <td key={accessor}>{tData}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  );
};
