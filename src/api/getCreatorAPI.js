import supabase from "../client";

const getCreator = async () => {
  const { data, error } = await supabase.from("creators").select();

  if (error) {
    console.error("Error fetching records:", error);
    return null;
  }
  return data;
};

export default getCreator;
