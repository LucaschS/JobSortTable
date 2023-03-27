import React, { useState } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import classes from './Table.module.css';

interface Props {
  items: {
    title: string;
    description: string;
    jobTagIds: { name: string; id: string; title: string }[];
    id: string;
    [key: string]: number | string | {};
  }[];
  columns: {
    label: string;
    accessor: string;
    sortable: boolean;
  }[];
}

const Table = ({ items, columns }: Props) => {
  const [tableData, setTableData] = useState<Props>({ items, columns });

  console.log(tableData, "tabledata");
  const handleSorting = (sortField: string, sortOrder: string) => {
    console.log(sortField, sortOrder, "sort");
    if (sortField) {
      const sorted = [...items].sort((a, b) => {
        console.log(a, b, "a,b");

        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData((prev) => {
        let items = Object.assign([], sorted);
        let columns = Object.assign([], prev.columns);
        return { items, columns };
      });
      console.log(sorted, "sorted");
    }
  };

  return (
    <ul className={classes.ul}>
      <TableHead columns={columns} handleSorting={handleSorting}></TableHead>
      <TableBody items={tableData.items}></TableBody>
    </ul>
  );
};

export default Table;
