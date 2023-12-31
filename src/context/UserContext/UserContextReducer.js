import USER_CONTEXT_ACTIONS from "./UserContextActionTypes";
import { setName, setUserDetails, setState } from "./UserContextActionCreators";

const UserContextReducer = (state, action) => {
  switch (action.type) {
    case USER_CONTEXT_ACTIONS.SET_NAME:
      return setName(state, action.payload);
    case USER_CONTEXT_ACTIONS.SET_USER_DETAILS:
      return setUserDetails(state, action.payload);
    default:
      return setState(state, action.payload);
  }
};

export default UserContextReducer;
