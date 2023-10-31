import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InfoIcon from "@mui/icons-material/Info";
import { encoder } from "./urlEncoder";

function Creator({ creatorData }) {
  const url = encoder(creatorData.url);
  const editCreatorURL = `/edit/${creatorData.name}/${url}`;
  const viewCreatorURL = `/view/${creatorData.name}/${url}`;

  let trimmedDescription = null;

  if (creatorData && creatorData.description.length > 90) {
    trimmedDescription = creatorData.description.slice(0, 90) + "...";
  } else {
    trimmedDescription = creatorData.description;
  }

  return (
    <Card
      className="comp-card"
      variant="outlined"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        width: "345px",
        height: "400px",
        margin: "25px",
        gap: "20px",
        padding: "20px",
      }}
    >
      <Link to={creatorData?.url}>
        <CardMedia
          sx={{ height: 200 }}
          image={creatorData?.imageURL}
          style={{ backgroundPosition: "top center" }}
          title="creators image"
        />
      </Link>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontWeight: "bold", fontSize: "28px" }}>
            {creatorData.name}
            <CardActions>
              {creatorData?.youtubeURL && (
                <a
                  href={creatorData?.youtubeURL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <YouTubeIcon style={{ color: "black" }}>{}</YouTubeIcon>
                </a>
              )}
              {creatorData?.instagramURL && (
                <a
                  href={creatorData?.instagramURL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon style={{ color: "black" }}>{}</InstagramIcon>
                </a>
              )}
              {creatorData?.twitterURL && (
                <a
                  href={creatorData?.twitterURL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <TwitterIcon style={{ color: "black" }}>{}</TwitterIcon>
                </a>
              )}
            </CardActions>
          </div>
          <CardActions>
            <span style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
              <Link to={viewCreatorURL}>
                <InfoIcon style={{ color: "black" }} />
              </Link>
              <Link to={editCreatorURL}>
                <EditIcon style={{ color: "black" }} />
              </Link>
            </span>
          </CardActions>
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ fontSize: "18px" }}
        >
          {trimmedDescription}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Creator;
