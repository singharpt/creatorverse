import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import updateCreatorAPI from "../api/updateCreatorAPI";
import addCreatorAPI from "../api/addCreatorAPI";
import { TextField, Button, Container } from "@mui/material";
import "./comp.css";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function CreatorForm(props) {
  const creatorData = props.creatorData;
  const deleteCreatorFunction = props.deleteCreatorFunction;
  const operation = props.operation;

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  // Define a state variable to manage the Snackbar visibility
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = React.useState("success");
  const [snackbarMessage, setSnackbarMessage] = React.useState("");

  const handleOpenDeleteDialog = () => {
    setDeleteDialogOpen(true);
  };

  const handleCloseDeleteDialog = () => {
    setDeleteDialogOpen(false);
  };

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
      .test("urlCheck", "URL must start with 'https'", checkURL)
      .required("Creator URL is required"),
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

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const onSubmit = async (data) => {
    // Open Snackbar while making the API call
    setSnackbarOpen(true);

    if (operation === "update") {
      const response = await updateCreatorAPI(data);
      if (response.task) {
        // Handle success
        navigate("/show");
        setSnackbarSeverity("success");
        setSnackbarMessage(response.message);
      } else {
        // Handle error
        setSnackbarSeverity("error");
        setSnackbarMessage(response.message);
      }
    } else {
      const response = await addCreatorAPI(data);
      if (response.task) {
        // Handle success
        navigate("/show");
        setSnackbarSeverity("success");
        setSnackbarMessage(response.message);
      } else {
        // Handle error
        setSnackbarSeverity("error");
        setSnackbarMessage(response.message);
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
          required
          {...register("name")}
          error={!!errors.name}
          defaultValue={creatorData && creatorData?.name}
          margin="normal"
          helperText={errors.name?.message}
        />
        <TextField
          label="Creator's Page URL"
          variant="filled"
          required
          InputProps={
            creatorData && {
              readOnly: true,
            }
          }
          className="form-input"
          {...register("url")}
          error={!!errors.url}
          defaultValue={creatorData && creatorData?.url}
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
            style={{
              width: "100%",
              fontWeight: "600",
              backgroundColor: "#00bcd4",
            }}
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
              onClick={handleOpenDeleteDialog} // Open the confirmation dialog
              size="large"
            >
              Delete Creator
            </Button>
          )}
        </div>
      </form>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
      <Dialog
        open={deleteDialogOpen}
        onClose={handleCloseDeleteDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Creator"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this creator?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleCloseDeleteDialog();
              deleteCreatorFunction(); // Execute the delete action
            }}
            color="primary"
            autoFocus
          >
            Confirm Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default CreatorForm;
