import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [data, setData] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem(key));
    initialValue = storedData ? storedData : initialValue;
    localStorage.setItem(key, JSON.stringify(initialValue));
    return initialValue;
  });

  const updateStorage = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setData(newValue);
  };

  return [data, updateStorage];
};

/*
localStorage.getItem(key)

JSON.parse

*/
