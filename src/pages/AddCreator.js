import React from "react";
import CreatorForm from "../components/creatorForm";

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
