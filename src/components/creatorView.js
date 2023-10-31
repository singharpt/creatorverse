import React from "react";
import ytImg from "../static/yt_icon_rgb.png";
import igImg from "../static/instagram.png";
import twImg from "../static/twitter.png";
import "./comp.css";
import placeholderImg from "../static/dummy-image-placeholder.png";

function CreatorView(props) {
  const creatorData = props.data;
  console.log(creatorData);
  const processURL = (url) => {
    const urlParts = url.split("/");
    if (urlParts.length >= 3) {
      return urlParts[3];
    }
    return url;
  };
  return (
    <main className="view-creator-container">
      <div className="view-creator-content">
        <img
          src={
            creatorData.imageURL === null || creatorData.imageURL === ""
              ? placeholderImg
              : creatorData.imageURL
          }
          alt="creator"
          className="view-creator-image"
        />
        <div className="view-creator-details">
          <h1>{creatorData.name}</h1>
          <div>
            {creatorData.youtubeURL && (
              <p>
                <span>
                  <img
                    src={ytImg}
                    alt="youtube"
                    style={{
                      height: "20px",
                      verticalAlign: "middle",
                      width: "25px",
                      marginRight: "10px",
                    }}
                  />
                </span>

                <span>
                  <a
                    href={creatorData.youtubeURL}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "white" }}
                  >
                    {processURL(creatorData.youtubeURL)}
                  </a>
                </span>
              </p>
            )}
            {creatorData.instagramURL && (
              <p>
                <span>
                  <img
                    src={igImg}
                    alt="instagram"
                    style={{
                      height: "25px",
                      verticalAlign: "middle",
                      width: "25px",
                      marginRight: "10px",
                    }}
                  />
                </span>
                <span>
                  {" "}
                  <a
                    href={creatorData.instagramURL}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "white" }}
                  >
                    {processURL(creatorData.instagramURL)}
                  </a>
                </span>
              </p>
            )}
            {creatorData.twitterURL && (
              <p>
                <span>
                  <img
                    src={twImg}
                    alt="twitter"
                    style={{
                      height: "20px",
                      width: "25px",
                      marginRight: "15px",
                      verticalAlign: "middle",
                    }}
                  />
                </span>
                <span>
                  <a
                    href={creatorData.twitterURL}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "white" }}
                  >
                    {processURL(creatorData.twitterURL)}
                  </a>
                </span>
              </p>
            )}
          </div>
          <p className="creator-description">{creatorData.description}</p>
          {/* <div className="view-creator-buttons">
            <Button
              variant="contained"
              style={{ width: "150px", fontWeight: "600" }}
              size="regular"
              type="button"
              xw
            >
              Save Creator
            </Button>

            <Button
              variant="contained"
              color="error"
              type="button"
              style={{ width: "170px", fontWeight: "600" }}
              size="normal"
            >
              Delete Creator
            </Button>
          </div> */}
        </div>
      </div>
    </main>
  );
}

export default CreatorView;
