import React, { useState } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

interface Props {
  items: {
    title: string;
    description: string;
    jobTagIds: { name: string; id: string; title: string }[];
    id: string;
  }[];

  columns: {
    label: string;
    accessor: string;
    sortable: boolean;
  }[];

  [key: string]: string | boolean | {};
}

const Table = ({ items, columns }: Props) => {
  const [tableData, setTableData] = useState<Props[]>([{ items, columns }]);
  // console.log({ items, columns }, "props");
  // setTableData([{items, columns}])
  console.log(tableData, "dupa");
  const handleSorting = (sortField: string, sortOrder: string) => {
    if (sortField) {
      console.log("click", sortField, sortOrder);

      const sorted = [...tableData].sort((a, b) => {
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
      setTableData(sorted);
    }
  };

  return (
    <>
      <TableHead columns={columns} handleSorting={handleSorting}></TableHead>
      <TableBody columns={columns} items={items}></TableBody>
    </>
  );
};

export default Table;
