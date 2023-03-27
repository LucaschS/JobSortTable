import React, { useState } from "react";
import classes from './TableHead.module.css';

export interface TableHeadProps {
  columns: {
    label: string;
    accessor: string;
    sortable: boolean;
  }[];
  handleSorting: (sortFiled: string, sortOrder: string) => void;
}

const TableHead: React.FC<TableHeadProps> = (props) => {
  const [sortField, setSortField] = useState<string>("");
  const [order, setOrder] = useState<string>("asc");

  const handleSortingChange = (x: string) => {
    const sortOrder = x === sortField && order === "asc" ? "dsc" : "asc";
    setSortField(x);
    setOrder(sortOrder);

    props.handleSorting(x, sortOrder);
  };

  return (
    <>
      {props.columns.map((column) => {
        return (
          <li className="classes" key={column.accessor}>
            <p>
              <span
                onClick={
                  column.sortable
                    ? () => handleSortingChange(column.accessor)
                    : undefined
                }
              >
                ▲ {column.label}
              </span>
            </p>
          </li>
        );
      })}
    </>
  );
};

export default TableHead;
