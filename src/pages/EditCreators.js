import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import deleteCreatorAPI from "../api/deleteCreatorAPI";
import { getSingleCreator } from "../api/getCreatorAPI";
import { decode } from "html-entities";
import { decoder } from "../components/urlEncoder";
import CreatorForm from "../components/CreatorForm";

function EditCreator() {
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

  console.log("url_data", url_data, creatorName, creatorURL);

  const fetchData = async () => {
    const response = await getSingleCreator(req);
    if (response.task) {
      setCreatorData(response.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate({ replace: true });

  const deleteCreator = async () => {
    const response = await deleteCreatorAPI(req);
    if (response.task) {
      navigate("/show");
    }
  };

  return (
    creatorData && (
      <CreatorForm
        creatorData={creatorData[0]}
        deleteCreatorFunction={deleteCreator}
        operation="update"
      />
    )
  );
}
export default EditCreator;
