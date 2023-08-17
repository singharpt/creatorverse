import supabase from "../client";

const updateCreator = async (req) => {
  const { error } = await supabase
    .from("creators")
    .update({ description: req.desc, imageURL: req.img })
    .eq("name", req.name);

  if (error) {
    return false;
  }
  return true;
};

export default updateCreator;
