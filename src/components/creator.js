import React from "react";

function creator({ creatorData }) {
  return (
    <>
      <p>{creatorData.name}</p>
      <p>{creatorData.url}</p>
      <p>{creatorData.description}</p>
      <p>{creatorData.imageURL}</p>
    </>
  );
}

export default creator;
