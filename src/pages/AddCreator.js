import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import addCreator from "../api/addCreatorAPI";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";
import "./pages.css";

function Form() {
  // creating data schema with yup for data validation

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
  } = useForm({ resolver: yupResolver(schema) });

  // The submit function called inside handleSubmit state method
  const onSubmit = async (data) => {
    console.log(data);
    const response = await addCreator(data);
    if (response) {
      navigate("/show");
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <TextField
          required
          label="Creator's Name"
          variant="filled"
          className="form-input"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextField
          label="Creator's URL"
          variant="filled"
          className="form-input"
          {...register("url")}
          error={!!errors.url}
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
          helperText={errors.img?.message}
        />
        <TextField
          label="Creator's Youtube URL"
          variant="filled"
          className="form-input"
          {...register("ytu")}
          error={!!errors.ytu}
          helperText={errors.ytu?.message}
        />
        <TextField
          label="Creator's Instagram URL"
          variant="filled"
          className="form-input"
          {...register("igu")}
          error={!!errors.igu}
          helperText={errors.igu?.message}
        />
        <TextField
          label="Creator's Twitter URL"
          variant="filled"
          className="form-input"
          {...register("twu")}
          error={!!errors.twu}
          helperText={errors.twu?.message}
        />
        <Button variant="contained" className="form-submit" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default Form;
