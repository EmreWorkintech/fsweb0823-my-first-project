export const ADD_TO_FAVORITES = "adds to favorites";
export const REMOVE_FROM_FAVORITES = "removes from favorites";

export const addToFavorites = (user) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: user,
  };
};

export const removeFromFavorites = (id) => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: id,
  };
};
