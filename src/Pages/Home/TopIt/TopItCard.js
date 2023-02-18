import React from "react";
import { Link } from "react-router-dom";
const TopItCard = ({ it }) => {
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={it.picture} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{it.name}</h2>
        <p> {it.email}</p>
        <p> {it.phone}</p>
        <p> {it.address}</p>
        <p> {it.about}</p>
        <div className="card-actions justify-center">
          <Link to="/allfresherjob">
            <button className="btn btn-primary"> View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopItCard;
