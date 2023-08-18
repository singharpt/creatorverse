import supabase from "../client";

const updateCreator = async (req) => {
  const { error } = await supabase
    .from("creators")
    .update({
      url: req.url,
      description: req.desc,
      imageURL: req.img,
      youtubeURL: req.ytu,
      instagramURL: req.igu,
      twitterURL: req.twu,
    })
    .eq("name", req.name);

  if (error) {
    return false;
  }
  return true;
};

export default updateCreator;
