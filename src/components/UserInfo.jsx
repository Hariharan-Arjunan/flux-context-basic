import React from "react";
import { useUserContext, USER_CONTEXT_ACTIONS } from "../context/UserContext";

const UserInfo = () => {
  const { state, dispatch } = useUserContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { target } = e;
    dispatch({
      type: USER_CONTEXT_ACTIONS.SET_USER_DETAILS,
      payload: {
        name: target[0].value,
        age: target[1].value,
        email: target[2].value,
      },
    });
  };
  return (
    <div>
      UserInfo
      <div>{state?.name}</div>
      <div>{state?.age}</div>
      <div>{state?.email}</div>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
          <label htmlFor="number">number</label>
          <input type="number" name="age" />
          <label htmlFor="email">email</label>
          <input type="email" name="email" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default UserInfo;
