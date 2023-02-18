import React from "react";

const ExoriencedJobCard = ({ job }) => {
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={job.logos} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">positionName :{job.positionName}</h2>
          <p>{job.jobloaction}</p>
          <p>{job.companyName}</p>
          <p>{job.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ExoriencedJobCard;
