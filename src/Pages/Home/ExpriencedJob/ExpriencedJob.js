import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExoriencedJobCard from "./ExoriencedJobCard";

const ExpriencedJob = () => {
  const [jobs, setJob] = useState([]);

  //  console.log(product);
  useEffect(() => {
    fetch("https://server-bay-theta.vercel.app/expriencedjob")
      .then((response) => response.json())
      .then((data) => setJob(data));
  }, []);
  return (
    <>
      <div>
        <h1 className="text-center mt-8 font-extrabold text-4xl">
          Experienced job
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {jobs.map((job) => (
            <ExoriencedJobCard key={job._id} job={job}></ExoriencedJobCard>
          ))}
        </div>
        <div className="card-actions justify-center">
          <Link to="/allfresherjob">
            <button className="btn btn-primary">Apply Now</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ExpriencedJob;
