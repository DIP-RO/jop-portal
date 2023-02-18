import React, { useEffect, useState } from "react";
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
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {freshers.map((fresher) => (
          <FresherJobCard key={fresher._id} fresher={fresher}></FresherJobCard>
        ))}
      </div>
    </>
  );
};

export default FresherJob;
