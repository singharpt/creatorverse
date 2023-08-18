import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// import defaultImage from "../static/dummy-image-placeholder.png";
import EditIcon from "@mui/icons-material/Edit";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

function Creator({ creatorData }) {
  const viewCreatorURL = `/view/${creatorData.name}`;

  return (
    <Card
      className="comp-card"
      variant="outlined"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        width: "345px",
        height: "400px",
        justifyContent: "space-between",
        margin: "40px",
        gap: "20px",
        padding: "10px",
      }}
    >
      <Link to={creatorData?.url}>
        <CardMedia
          sx={{ height: 200 }}
          image={creatorData?.imageURL}
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
          </div>
          <CardActions>
            <Link to={viewCreatorURL}>
              <EditIcon style={{ color: "black" }}>Edit Creator</EditIcon>
            </Link>
          </CardActions>
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ fontSize: "18px" }}
        >
          {creatorData.description}
        </Typography>
        <CardActions>
          {creatorData?.youtubeURL && (
            <Link to={creatorData?.youtubeURL}>
              <YouTubeIcon style={{ color: "black" }}>{}</YouTubeIcon>
            </Link>
          )}
          {creatorData?.instagramURL && (
            <Link to={creatorData?.instagramURL}>
              <InstagramIcon style={{ color: "black" }}>{}</InstagramIcon>
            </Link>
          )}
          {creatorData?.twitterURL && (
            <Link to={creatorData?.twitterURL}>
              <TwitterIcon style={{ color: "black" }}>{}</TwitterIcon>
            </Link>
          )}
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default Creator;
