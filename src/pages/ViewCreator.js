import React from "react";

function ViewCreator(creatorData) {
  return (
    <main className="view-creator">
      <div className="view-creator-left">
        <img src={creatorData.imageURL} alt="creator"></img>
      </div>
      <div className="view-creator-right">
        <p>{creatorData.name}</p>
        <p>{creatorData.youtubeURL}</p>
        <p>{creatorData.instagramURL}</p>
        <p>{creatorData.twitterURL}</p>
        <p>{creatorData.description}</p>
        <div className="view-creator-buttons">
          <button className="view-creator-button-edit">Edit Creator</button>
          <button className="view-creator-button-delete">Delete Creator</button>
        </div>
      </div>
    </main>
  );
}

export default ViewCreator;
