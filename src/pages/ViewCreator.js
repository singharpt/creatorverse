import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import deleteCreatorAPI from "../api/deleteCreatorAPI";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import updateCreator from "../api/updateCreatorAPI";
import { getSingleCreator } from "../api/getCreatorAPI";
import { TextField, Button, Container } from "@mui/material";
import { decode } from "html-entities";

function ViewCreator() {
  const [creatorData, setCreatorData] = useState(null);

  const checkURL = (value) => {
    if (value === "") {
      return true;
    } else {
      return value.startsWith("https");
    }
  };

  const schema = yup.object().shape({
    name: yup.string().required("Creator name is required!"),
    url: yup
      .mixed()
      .test("urlCheck", "URL must start with 'https' or be null", checkURL),
    desc: yup.string(),
    img: yup
      .mixed()
      .test("urlCheck", "URL must start with 'https' or be null", checkURL),
    ytu: yup
      .mixed()
      .test("urlCheck", "URL must start with 'https' or be null", checkURL),
    igu: yup
      .mixed()
      .test("urlCheck", "URL must start with 'https' or be null", checkURL),
    twu: yup
      .mixed()
      .test("urlCheck", "URL must start with 'https' or be null", checkURL),
  });

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
    defaultValues: creatorData ? creatorData.data : {},
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
    creatorData && (
      <Container>
        <form onSubmit={handleSubmit(onSubmit)} className="form-container">
          <TextField
            label="Creator's Name"
            variant="filled"
            className="form-input"
            {...register("name")}
            error={!!errors.name}
            defaultValue={creatorData[0]?.name}
            InputProps={{
              readOnly: true,
            }}
            helperText={errors.name?.message}
          />
          <TextField
            label="Creator's URL"
            variant="filled"
            className="form-input"
            {...register("url")}
            error={!!errors.url}
            defaultValue={creatorData[0]?.url}
            helperText={errors.url?.message}
          />
          <TextField
            label="Creator's Description"
            variant="filled"
            className="form-input"
            multiline
            rows={2}
            maxRows={4}
            {...register("desc")}
            error={!!errors.desc}
            helperText={errors.desc?.message}
          />
          <TextField
            label="Creator's Image URL"
            variant="filled"
            className="form-input"
            {...register("img")}
            error={!!errors.img}
            defaultValue={creatorData[0]?.imageURL}
            helperText={errors.img?.message}
          />
          <TextField
            label="Creator's Youtube URL"
            variant="filled"
            className="form-input"
            {...register("ytu")}
            error={!!errors.ytu}
            defaultValue={creatorData[0]?.youtubeURL}
            helperText={errors.ytu?.message}
          />
          <TextField
            label="Creator's Instagram URL"
            variant="filled"
            className="form-input"
            {...register("igu")}
            error={!!errors.igu}
            defaultValue={creatorData[0]?.instagramURL}
            helperText={errors.igu?.message}
          />
          <TextField
            label="Creator's Twitter URL"
            variant="filled"
            className="form-input"
            {...register("twu")}
            error={!!errors.twu}
            defaultValue={creatorData[0]?.twitterURL}
            helperText={errors.twu?.message}
          />
          <Button variant="contained" className="form-submit" type="submit">
            Save Changes
          </Button>
          <Button
            variant="contained"
            className="form-submit"
            type="button"
            onClick={deleteCreator}
          >
            Delete
          </Button>
        </form>
      </Container>
    )
  );
}

export default ViewCreator;
