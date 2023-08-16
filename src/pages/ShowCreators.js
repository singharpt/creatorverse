import React, { useState, useEffect } from "react";
import getCreatorData from "../api/getCreatorAPI";
import Creator from "../components/creator";

function ShowCreators() {
  const [creatorData, setCreatorData] = useState(null);

  const fetchData = async () => {
    const data = await getCreatorData();
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
