import { ColumnsData } from "../../app-common/types";
import { camelCaseToTitle } from "./utils";

type TableHeadProps = {
  columns: ColumnsData[];
};

export const TableHead = (props: TableHeadProps) => {
  return (
    <thead>
      <tr>
        {props.columns.map(({ label, accessor }) => (
          <th key={accessor}>{camelCaseToTitle(label)}</th>
        ))}
      </tr>
    </thead>
  );
};
