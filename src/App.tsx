import React, { useEffect, useState } from "react";
import Table from "./components/Table";

interface jobPost {
  title: string;
  description: string;
  jobTagIds: { name: string; id: string; title: string }[];
  name: string;
  id: string;
}

interface jobTag {
  name: string;
  id: string;
  title: string;
  description: string;
  jobTagIds: string[];
}

function App() {
  const [jobPost, setJobPost] = useState<jobPost[]>([]);
  const [jobTag, setJobTag] = useState<jobTag[]>([]);
  // console.log(jobPost, jobTag);

  const [columns, setColumns] = useState([
    { label: "Title", accessor: "title", sortable: true },
    { label: "Description", accessor: "description", sortable: true },
    { label: "JobTag", accessor: "jobTagIds", sortable: true },
  ]);

  useEffect(() => {
    const fetchJobPost = async function () {
      try {
        const url = "https://636ce2d8ab4814f2b2712854.mockapi.io/job-posts";
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Custom Error");
        }
        const responseData = await response.json();
        setJobPost(responseData);
        return "Data fetched";
      } catch (err) {
        console.log(err);
        throw new Error("Custom Error");
      }
    };

    const fetchJobTag = async function () {
      try {
        const response = await fetch(
          "https://636ce2d8ab4814f2b2712854.mockapi.io/job-tags"
        );
        if (!response.ok) {
          throw new Error("Custom Error");
        }
        const data = await response.json();
        setJobTag(data);
        return "Done with fetchAPI";
      } catch (err) {
        console.log(err);
        throw new Error("Custom Error");
      }
    };

    fetchJobTag();
    fetchJobPost();
  }, []);

  jobPost.map((job) => {
    const c = jobTag.filter((tag) =>
      job.jobTagIds.map((x) => x.toString()).includes(tag.id)
    );
    // console.log(c, "c");

    Object.assign(job.jobTagIds, c);
  });

  // console.log(jobPost);

  return (
    <>
      <Table items={jobPost} columns={columns} />
    </>
  );
}

export default App;
