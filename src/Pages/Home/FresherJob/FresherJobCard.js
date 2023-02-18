import React from "react";

const FresherJobCard = ({ fresher }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={fresher.logos} alt="" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">positionName :{fresher.positionName}</h2>
        <p>{fresher.joblocation}</p>
        <p>{fresher.companyName}</p>
        <p>{fresher.description}</p>
      </div>
    </div>
  );
};

export default FresherJobCard;
