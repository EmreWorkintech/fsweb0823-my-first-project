export const INCREASE = "increases counter by one";
export const DECREASE = "decreases counter by one";
export const PLUS = "increases counter by given number";

export const increase = () => {
  return {
    type: INCREASE,
  };
};

export function decrease() {
  return {
    type: DECREASE,
  };
}

export function plus(number) {
  return {
    type: PLUS,
    payload: number,
  };
}
