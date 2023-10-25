/*
export function myLogger (store) {
    return function (next) {
        return function (action) {
            console.log("dispatched action: ", action)
        }
    }
} 
*/

export const myLogger_arrow = (store) => (next) => (action) => {
  console.warn("dispatched action: ", action);
  console.log("[oldStore]:", store.getState());
  next(action);
  console.log("action dispatched");
  console.log("[newStore]:", store.getState());
};
