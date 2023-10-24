export const CHANGE_NAME = "changes name on the form";
export const CHANGE_PASSWORD = "changes password on the form";

export const changeName = (value) => {
  return {
    type: CHANGE_NAME,
    payload: value,
  };
};

export const changePassword = (value) => {
  return {
    type: CHANGE_PASSWORD,
    payload: value,
  };
};
