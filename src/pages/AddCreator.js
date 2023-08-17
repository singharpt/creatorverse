import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import addCreator from "../api/addCreatorAPI";
import { useNavigate } from "react-router-dom";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input type="text" placeholder="Creator's Name" {...register("name")} />
        <p>{errors.name?.message}</p>
      </div>
      <div>
        <input type="text" placeholder="Creator's URL" {...register("url")} />
        <p>{errors.url?.message}</p>
      </div>
      <div>
        <input
          type="text"
          placeholder="Creator's Description"
          {...register("desc")}
        />
        <p>{errors.desc?.message}</p>
      </div>
      <div>
        <input
          type="text"
          placeholder="Creator's Image URL"
          {...register("img")}
        />
        <p>{errors.img?.message}</p>
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  );
}

export default Form;
