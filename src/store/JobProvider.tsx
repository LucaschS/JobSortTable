import React, { FC } from "react";
import JobContext from "./JobContext";

export interface TabsProps {
  children: React.ReactNode;
}

const JobProvider = (props: TabsProps) => {
  const contextValue: {
    JobPost: [];
    JobTag: [];
  } = {
    JobPost: [],
    JobTag: [],
  };

  return (
    <JobContext.Provider value={contextValue}>
      {props.children}
    </JobContext.Provider>
  );
};

export default JobProvider;
