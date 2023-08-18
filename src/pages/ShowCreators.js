import React, { useState, useEffect } from "react";
import { getAllCreators } from "../api/getCreatorAPI";
import Creator from "../components/creatorCard";
import "./pages.css";

function ShowCreators() {
  const [creatorData, setCreatorData] = useState(null);

  const fetchData = async () => {
    const data = await getAllCreators();
    if (data) {
      setCreatorData(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(creatorData);

  return (
    <div className="show-creators-main">
      {creatorData &&
        creatorData.map((item) => (
          <div key={item.id}>
            <Creator creatorData={item} />
          </div>
        ))}
    </div>
  );
}

export default ShowCreators;
