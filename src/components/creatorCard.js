import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./comp.css";
import defaultImage from "../static/dummy-image-placeholder.png";
import EditIcon from "@mui/icons-material/Edit";

function Creator({ creatorData }) {
  const viewCreatorURL = `/view/${creatorData.name}`;

  return (
    <Card className="comp-card" variant="outlined">
      <Link to={creatorData?.imageURL}>
        <CardMedia
          sx={{ height: 140 }}
          image={defaultImage}
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
          <div>{creatorData.name}</div>
          <CardActions>
            <Link to={viewCreatorURL}>
              <EditIcon style={{ color: "black" }}>Edit Creator</EditIcon>
            </Link>
          </CardActions>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {creatorData.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Creator;
