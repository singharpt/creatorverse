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

  const schema = yup.object().shape({
    name: yup.string().required("Creator name is required!"),
    url: yup.string().required("Last Name is required!"),
    desc: yup.string().required("Description is required!"),
    img: yup.string().required("Image URL is required!"),
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
          label="Creator's Name"
          variant="outlined"
          className="form-input"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextField
          label="Creator's URL"
          variant="outlined"
          className="form-input"
          {...register("url")}
          error={!!errors.url}
          helperText={errors.url?.message}
        />
        <TextField
          label="Creator's Description"
          variant="outlined"
          className="form-input"
          {...register("desc")}
          error={!!errors.desc}
          helperText={errors.desc?.message}
        />
        <TextField
          label="Creator's Image URL"
          variant="outlined"
          className="form-input"
          {...register("img")}
          error={!!errors.img}
          helperText={errors.img?.message}
        />
        <Button variant="contained" className="form-submit" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default Form;
