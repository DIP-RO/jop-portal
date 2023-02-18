import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FresherJobCard from "./FresherJobCard";

const FresherJob = () => {
  const [freshers, setFresher] = useState([]);

  //  console.log(product);
  useEffect(() => {
    fetch("https://server-bay-theta.vercel.app/fresherjob")
      .then((response) => response.json())
      .then((data) => setFresher(data));
  }, []);
  return (
    <>
      <div>
        <h1 className="text-center mt-8 font-extrabold text-4xl">
          Fresher job
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {freshers.slice(0, 6).map((fresher) => (
            <FresherJobCard
              key={fresher._id}
              fresher={fresher}
            ></FresherJobCard>
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

export default FresherJob;
