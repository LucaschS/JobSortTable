import React, { useState } from "react";

interface Props {
  columns: {
    label: string;
    accessor: string;
    sortable: boolean;
  }[];
  handleSorting: (sortFiled: string, sortOrder: string) => void;
}
type SortField = string;
type SortOrder = string;

const TableHead: React.FC<Props> = (props) => {
  const [sortField, setSortField] = useState<SortField | string>();
  const [order, setOrder] = useState<SortOrder>("asc");

  const handleSortingChange = (x: string) => {
    const sortOrder = x === sortField && order === "asc" ? "dsc" : "asc";

    setSortField(x);
    setOrder(sortOrder);

    props.handleSorting(x, sortOrder);
  };

  return (
    <li>
      {props.columns.map((column) => {
        
        return (
          <p>
            <span
              key={column.accessor}
              onClick={
                column.sortable ? () => handleSortingChange(column.accessor) : undefined
              }
            >
              ▲ {column.label}
            </span>
          </p>
        );
      })}
    </li>
  );
};

export default TableHead;
