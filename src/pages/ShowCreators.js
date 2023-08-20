import React, { useState, useEffect } from "react";
import { getAllCreators } from "../api/getCreatorAPI";
import Creator from "../components/creatorCard";
import "./pages.css";
import creatoricon from "../static/rating.png";

function ShowCreators() {
  const [creatorData, setCreatorData] = useState(null);

  const fetchData = async () => {
    const response = await getAllCreators();
    if (response.task) {
      setCreatorData(response.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(creatorData);

  return (
    <>
      <h1
        style={{
          fontSize: "50px",
          fontWeight: "bolder",
          color: "white",
          textAlign: "center",
        }}
      >
        CREATORS AB'OOARD
        <img
          src={creatoricon}
          style={{
            textAlign: "center",
            marginLeft: "20px",
            height: "75px",
            width: "75px",
            zIndex: "2",
          }}
          alt="creator icon"
        ></img>
      </h1>
      <div className="show-creators-main">
        {creatorData && creatorData?.length !== 0 ? (
          creatorData.map((item) => (
            <div key={item.id}>
              <Creator creatorData={item} />
            </div>
          ))
        ) : (
          <h1
            style={{ fontSize: "70px", fontWeight: "bolder", color: "white" }}
          >
            No Creator Data Available
          </h1>
        )}
      </div>
    </>
  );
}

export default ShowCreators;
