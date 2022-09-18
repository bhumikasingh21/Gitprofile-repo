import { GET_PROFILE_DATA } from "../actions/profileAction";

const initialState = {
  profileData: [],
};

const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PROFILE_DATA":
      return {
        ...state,
        profileData: [action.payload],
      };

    default:
      return state;
  }
};

export default userProfileReducer;
