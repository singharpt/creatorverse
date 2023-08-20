import supabase from "../client";

export const getAllCreators = async () => {
  const { data, error } = await supabase.from("creators").select();

  if (error) {
    const res = {
      task: false,
      message: "Error in getting creators data, please try again!",
    };
    return res;
  }
  const res = {
    task: true,
    message: "Data received successfully!",
    data: data,
  };
  return res;
};

export const getSingleCreator = async (req) => {
  console.log("get single api", req.name, req.url);
  const { data, error } = await supabase
    .from("creators")
    .select()
    .eq("url", req.url);

  if (error) {
    const res = {
      task: false,
      message: "Error in getting creators data, please try again!",
    };
    return res;
  }
  if (data.length > 0) {
    const res = {
      task: true,
      message: "Data received successfully!",
      data: data,
    };
    return res;
  } else {
    const res = {
      task: false,
      message: "Creator requested does not exist",
    };
    return res;
  }
};
