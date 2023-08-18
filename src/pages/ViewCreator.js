import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import deleteCreatorAPI from "../api/deleteCreatorAPI";
import { getSingleCreator } from "../api/getCreatorAPI";
import { decode } from "html-entities";
import CreatorForm from "../components/creatorForm";

function ViewCreator() {
  const [creatorData, setCreatorData] = useState(null);

  let url_coded_name = useParams();
  const { creatorName } = decode(url_coded_name);

  const fetchData = async () => {
    const data = await getSingleCreator(creatorName);
    if (data) {
      setCreatorData(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate({ replace: true });

  const deleteCreator = async () => {
    const res = await deleteCreatorAPI(creatorName);
    if (res) {
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
export default ViewCreator;
