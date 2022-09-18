export const GET_PROFILE_DATA = "GET_PROFILE_DATA";

export const getProfileData = (data) => {
  return {
    type: "GET_PROFILE_DATA",
    payload: data,
  };
};
