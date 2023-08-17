import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import deleteCreatorAPI from "../api/deleteCreatorAPI";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import updateCreator from "../api/updateCreatorAPI";
import { getSingleCreator } from "../api/getCreatorAPI";

function ViewCreator() {
  const [creatorData, setCreatorData] = useState(null);
  // creating data schema with yup for data validation
  const schema = yup.object().shape({
    name: yup.string().required("Creator name is required!"),
    url: yup.string().required("Last Name is required!"),
    desc: yup.string().required("Description is required!"),
    img: yup.string().required("Image URL is required!"),
  });

  const { creatorName } = useParams();

  const fetchData = async () => {
    const data = await getSingleCreator(creatorName);
    if (data) {
      setCreatorData(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(creatorData);

  const navigate = useNavigate({ replace: true });

  const deleteCreator = async () => {
    const res = await deleteCreatorAPI(creatorName);
    if (res) {
      navigate("/show");
    }
  };

  // Declare the useForm state where register has formData and handleSubmit helps in submitting form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: creatorData ? creatorData[0] : {},
  });

  // The submit function called inside handleSubmit state method
  const onSubmit = async (data) => {
    console.log(data);
    const response = await updateCreator(data);
    if (response) {
      navigate("/show");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="text"
          placeholder="Creator's Name"
          value={creatorName}
          readOnly
          {...register("name")}
        ></input>
        <p>{errors.name?.message}</p>
      </div>
      <div>
        <input
          type="text"
          placeholder="Creator's URL"
          defaultValue={creatorData ? creatorData[0].url : ""}
          {...register("url")}
        />

        <p>{errors.url?.message}</p>
      </div>
      <div>
        <input
          type="text"
          placeholder="Creator's Description"
          defaultValue={creatorData ? creatorData[0].description : ""}
          {...register("desc")}
        />
        <p>{errors.desc?.message}</p>
      </div>
      <div>
        <input
          type="text"
          placeholder="Creator's Image URL"
          defaultValue={creatorData ? creatorData[0].imageURL : ""}
          {...register("img")}
        />
        <p>{errors.img?.message}</p>
      </div>
      <div>
        <input type="submit" />
      </div>
      <button onClick={deleteCreator}>Delete Creator</button>
    </form>
  );
}

export default ViewCreator;
