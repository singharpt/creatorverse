import "./pages.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleCreator } from "../api/getCreatorAPI";
import { decode } from "html-entities";
import CreatorView from "../components/creatorView";
import { decoder } from "../components/urlEncoder";

function ViewCreator() {
  const [creatorData, setCreatorData] = useState(null);

  let url_data = useParams();
  let url_coded_name = url_data.creatorName;
  let url_coded_url = url_data.creatorURL;

  const creatorName = decode(url_coded_name);
  const creatorURL = decoder(url_coded_url);

  const req = {
    name: creatorName,
    url: creatorURL,
  };

  const fetchData = async () => {
    const response = await getSingleCreator(req);
    if (response.task) {
      setCreatorData(response.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return creatorData && <CreatorView data={creatorData[0]} />;
}

export default ViewCreator;
