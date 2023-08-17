import supabase from "../client";

export const getAllCreators = async () => {
  const { data, error } = await supabase.from("creators").select();

  if (error) {
    console.error("Error fetching records:", error);
    return null;
  }
  return data;
};

export const getSingleCreator = async (creatorName) => {
  const { data, error } = await supabase
    .from("creators")
    .select()
    .eq("name", creatorName);

  if (error) {
    console.error("Error fetching records:", error);
    return null;
  }
  return data;
};
