import supabase from "../client";
import { getSingleCreator } from "./getCreatorAPI";

const addCreator = async (creatorData) => {
  const response = await getSingleCreator(creatorData);
  if (!response.task) {
    const { data, error } = await supabase.from("creators").insert([
      {
        name: creatorData.name,
        url: creatorData.url,
        description: creatorData.desc,
        imageURL: creatorData.img,
        youtubeURL: creatorData.ytu,
        instagramURL: creatorData.igu,
        twitterURL: creatorData.twu,
      },
    ]);

    if (error) {
      const res = {
        task: false,
        message: "Error in adding creator, please try again!",
      };
      return res;
    }
    const res = {
      task: true,
      message: "Creator added successfully",
      data: data,
    };
    return res;
  } else {
    const res = {
      task: false,
      message: "A creator with the same URL already exists!",
    };
    return res;
  }
};

export default addCreator;
