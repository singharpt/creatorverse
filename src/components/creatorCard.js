import React from "react";
import { Link } from "react-router-dom";

function creator({ creatorData }) {
  const viewCreatorURL = `/view/${creatorData.name}`;
  return (
    <>
      <p>{creatorData.name}</p>
      <p>{creatorData.url}</p>
      <p>{creatorData.description}</p>
      <p>{creatorData.imageURL}</p>
      <Link to={viewCreatorURL}>
        <button>Edit Creator</button>
      </Link>
    </>
  );
}

export default creator;
