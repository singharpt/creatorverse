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
        navigate("/show");
      }
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        {creatorData === null ? (
          <h1>ADD CREATOR DETAILS</h1>
        ) : (
          <h1>UPDATE CREATOR DETAILS</h1>
        )}
        <TextField
          label="Creator's Name"
          variant="filled"
          className="form-input"
          {...register("name")}
          error={!!errors.name}
          defaultValue={creatorData && creatorData?.name}
          margin="normal"
          InputProps={
            creatorData && {
              readOnly: true,
            }
          }
          helperText={errors.name?.message}
        />
        <TextField
          label="Creator's Page URL"
          variant="filled"
          className="form-input"
          {...register("url")}
          error={!!errors.url}
          defaultValue={creatorData === null ? "https://" : creatorData?.url}
          helperText={errors.url?.message}
          margin="normal"
        />
        <TextField
          label="Creator's Content Description"
          variant="filled"
          className="form-input"
          multiline
          rows={2}
          {...register("desc")}
          error={!!errors.desc}
          defaultValue={creatorData && creatorData?.description}
          helperText={errors.desc?.message}
          margin="normal"
          xw
        />
        <TextField
          label="Creator's Image URL"
          variant="filled"
          className="form-input"
          {...register("img")}
          error={!!errors.img}
          defaultValue={creatorData && creatorData?.imageURL}
          helperText={errors.img?.message}
          margin="normal"
        />
        <TextField
          label="Creator's Youtube URL"
          variant="filled"
          className="form-input"
          {...register("ytu")}
          error={!!errors.ytu}
          defaultValue={creatorData && creatorData?.youtubeURL}
          helperText={errors.ytu?.message}
          margin="normal"
        />
        <TextField
          label="Creator's Instagram URL"
          variant="filled"
          className="form-input"
          {...register("igu")}
          error={!!errors.igu}
          defaultValue={creatorData && creatorData?.instagramURL}
          helperText={errors.igu?.message}
          margin="normal"
        />
        <TextField
          label="Creator's Twitter URL"
          variant="filled"
          className="form-input"
          {...register("twu")}
          error={!!errors.twu}
          defaultValue={creatorData && creatorData?.twitterURL}
          helperText={errors.twu?.message}
          margin="normal"
        />
        <div className="form-buttons">
          <Button
            variant="contained"
            size="large"
            style={{ width: "100%", fontWeight: "600" }}
            type="submit"
          >
            Save Creator
          </Button>
          {deleteCreatorFunction && (
            <Button
              variant="contained"
              color="error"
              type="button"
              style={{ width: "100%", fontWeight: "bold" }}
              onClick={deleteCreatorFunction}
              size="large"
            >
              Delete Creator
            </Button>
          )}
        </div>
      </form>
    </Container>
  );
}

export default CreatorForm;
