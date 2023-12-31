export const INITIAL_STATE = {
  name: null,
  age: null,
  email: null,
};

export const setName = (state, value) => {
  return {
    ...state,
    name: value.name,
  };
};

export const setUserDetails = (state, value) => {
  return {
    ...state,
    name: value.name,
    age: value.age,
    email: value.email,
  };
};

export const setState = (state, value) => {
  return {
    ...state,
    ...value,
  };
};
