import React from "react";
import CreatorForm from "../components/CreatorForm";

function Form() {
  return (
    <CreatorForm
      creatorData={null}
      deleteCreatorFunction={null}
      operation="add"
    />
  );
}

export default Form;
