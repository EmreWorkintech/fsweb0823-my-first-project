import { toast } from "react-toastify";
import { DECREASE, INCREASE } from "../actions/counterActions";
import { REMOVE_FROM_FAVORITES } from "../actions/favUsersActions";

export const authControl = (store) => (next) => (action) => {
  if (
    action.type === INCREASE ||
    action.type === DECREASE ||
    action.type === REMOVE_FROM_FAVORITES
  ) {
    if (store.getState().loggedInUser.role === "Admin") {
      console.log("Admin user logged in");
      next(action);
    } else {
      toast.error("Bu işlem için yetkiniz yok!");
    }
  } else {
    next(action);
  }
};
