import supabase from "../client";

const deleteCreator = async (creatorName) => {
  const { error } = await supabase
    .from("creators")
    .delete()
    .eq("name", creatorName);

  if (error) {
    console.error("Error deleting creator: ", error);
    return false;
  } else {
    return true;
  }
};

export default deleteCreator;
