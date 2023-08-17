import supabase from "../client";

const addCreator = async (creatorData) => {
  const { data, error } = await supabase.from("creators").insert([
    {
      name: creatorData.name,
      url: creatorData.url,
      description: creatorData.desc,
      imageURL: creatorData.img,
    },
  ]);

  if (error) {
    console.error("Error inserting record:", error);
    return false; // Or handle the error in an appropriate way
  }

  console.log("Record inserted successfully:", data);
  return true;
};

export default addCreator;
