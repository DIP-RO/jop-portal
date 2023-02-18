import React, { useEffect, useState } from "react";
import TopItCard from "./TopItCard";

const TopIt = () => {
  const [its, setIt] = useState([]);

  //  console.log(product);
  useEffect(() => {
    fetch("https://server-bay-theta.vercel.app/topit")
      .then((response) => response.json())
      .then((data) => setIt(data));
  }, []);

  return (
    <div>
      <h1 className="text-center mt-8 font-extrabold text-4xl">Top It</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {its.slice(0, 3).map((it) => (
          <TopItCard key={it._id} it={it}></TopItCard>
        ))}
      </div>
    </div>
  );
};

export default TopIt;
