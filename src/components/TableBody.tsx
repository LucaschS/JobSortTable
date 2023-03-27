import React, { useContext } from "react";
import JobContext from "../store/JobContext";
import classes from "./TableBody.css";

export interface TableBodyProps {
  items: {
    title: string;
    description: string;
    jobTagIds: { name: string; id: string; title: string }[];
    id: string;
    // [key: string]: number | string | {};
  }[];
}

const TableBody = (props: TableBodyProps) => {
  const ctx = useContext(JobContext);
  // console.log(props.items);
  return (
    <>
      {props.items.map((item, index) => {
        return (
          <li className='classes' key={item.id}>
            <p>
              <span>TITLE: {item.title} </span>
              <span>DESCRIPTION: {item.description} </span>
              {item.jobTagIds.map((x, index) => (
                <span key={index}>
                  JOBTAGS: {x.name} {" ,"}
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
