import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import updateCreatorAPI from "../api/updateCreatorAPI";
import addCreatorAPI from "../api/addCreatorAPI";
import { TextField, Button, Container } from "@mui/material";
import "./comp.css";

function CreatorForm(props) {
  const creatorData = props.creatorData;
  const deleteCreatorFunction = props.deleteCreatorFunction;
  const operation = props.operation;
  console.log(creatorData);
  console.log(deleteCreatorFunction);
  console.log(operation);

  const navigate = useNavigate({ replace: true });

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

  // Declare the useForm state where register has formData and handleSubmit helps in submitting form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: creatorData ? creatorData : {},
  });

  // The submit function called inside handleSubmit state method
  const onSubmit = async (data) => {
    if (operation === "update") {
      const response = await updateCreatorAPI(data);
      if (response) {
        navigate("/show");
      }
    } else {
      const response = await addCreatorAPI(data);
      if (response) {
        navigate("/add");
      }
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <TextField
          label="Creator's Name"
          variant="filled"
          className="form-input"
          {...register("name")}
          error={!!errors.name}
          defaultValue={creatorData && creatorData?.name}
          InputProps={
            creatorData && {
              readOnly: true,
            }
          }
          helperText={errors.name?.message}
        />
        <TextField
          label="Creator's URL"
          variant="filled"
          className="form-input"
          {...register("url")}
          error={!!errors.url}
          defaultValue={creatorData && creatorData?.url}
          helperText={errors.url?.message}
        />
        <TextField
          label="Creator's Description"
          variant="filled"
          className="form-input"
          multiline
          rows={2}
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
          defaultValue={creatorData && creatorData?.imageURL}
          helperText={errors.img?.message}
        />
        <TextField
          label="Creator's Youtube URL"
          variant="filled"
          className="form-input"
          {...register("ytu")}
          error={!!errors.ytu}
          defaultValue={creatorData && creatorData?.youtubeURL}
          helperText={errors.ytu?.message}
        />
        <TextField
          label="Creator's Instagram URL"
          variant="filled"
          className="form-input"
          {...register("igu")}
          error={!!errors.igu}
          defaultValue={creatorData && creatorData?.instagramURL}
          helperText={errors.igu?.message}
        />
        <TextField
          label="Creator's Twitter URL"
          variant="filled"
          className="form-input"
          {...register("twu")}
          error={!!errors.twu}
          defaultValue={creatorData && creatorData?.twitterURL}
          helperText={errors.twu?.message}
        />
        <Button variant="contained" className="form-submit" type="submit">
          Save Changes
        </Button>
        {deleteCreatorFunction && (
          <Button
            variant="contained"
            className="form-submit"
            type="button"
            onClick={deleteCreatorFunction}
          >
            Delete
          </Button>
        )}
      </form>
    </Container>
  );
}

export default CreatorForm;
