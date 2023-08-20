import supabase from "../client";

const updateCreator = async (req) => {
  const { error } = await supabase
    .from("creators")
    .update({
      name: req.name,
      description: req.desc,
      imageURL: req.img,
      youtubeURL: req.ytu,
      instagramURL: req.igu,
      twitterURL: req.twu,
    })
    .eq("url", req.url);

  if (error) {
    const res = {
      task: false,
      message: "Error in updating creator, please try again!",
    };
    return res;
  }
  const res = {
    task: true,
    message: "Creator updated successfully",
  };
  return res;
};

export default updateCreator;
