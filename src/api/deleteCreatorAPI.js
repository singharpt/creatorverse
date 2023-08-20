import supabase from "../client";

const deleteCreator = async (req) => {
  const { error } = await supabase.from("creators").delete().eq("url", req.url);

  if (error) {
    const res = {
      task: false,
      message: "Error is deleting creator, please try again!",
    };
    return res;
  }
  const res = {
    task: true,
    message: "Creator deleted successfully",
  };
  return res;
};

export default deleteCreator;
