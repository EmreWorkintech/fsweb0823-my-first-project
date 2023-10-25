import { toast } from "react-toastify";
import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from "../actions/favUsersActions";

const initialState = [];

export const favUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      const oldUser = state.find((user) => user.id === action.payload.id);
      if (oldUser) {
        toast.warn(
          `User ${action.payload.first_name} is already in the Favorites`
        );
        return state;
      } else {
        const updatedList = [...state, action.payload];
        localStorage.setItem("favUsers", JSON.stringify(updatedList));
        toast.success(`User ${action.payload.first_name} added to Favorites`);
        return updatedList;
      }
    case REMOVE_FROM_FAVORITES:
      const user = state.find((user) => user.id === action.payload);
      const removedList = state.filter((user) => user.id !== action.payload);
      localStorage.setItem("favUsers", JSON.stringify(removedList));
      toast.success(`User ${user.first_name} removed from Favorites`);
      return removedList;
    default:
      return state;
  }
};
