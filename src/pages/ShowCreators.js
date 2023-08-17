import React, { useState, useEffect } from "react";
import { getAllCreators } from "../api/getCreatorAPI";
import Creator from "../components/creatorCard";

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
    <div>
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
