import React from "react";

type JobContextObj = {
  JobPost: [];
  JobTag: [];
};

const JobContext = React.createContext<JobContextObj>({
  JobPost: [],
  JobTag: [],
});

export default JobContext;
