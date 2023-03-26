import React, { useContext } from "react";
import JobContext from "../store/JobContext";

export interface Props {
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

const TableBody: React.FC<Props> = (props) => {
  const ctx = useContext(JobContext);

  // console.log(props.items);

  return (
    <>
      {props.items.map((item, index) => {
        return (
          <li key={item.id}>
            <p>
              <span>{item.title} </span>
              <span>{item.description} </span>
              {item.jobTagIds.map((x) => (
                <span>
                  {x.name} {" ,"}
                </span>
              ))}
            </p>
          </li>
        );
      })}
    </>
  );
};
export default TableBody;
