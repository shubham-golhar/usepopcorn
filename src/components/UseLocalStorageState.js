import { useState, useEffect } from "react";

const UseLocalStorageState = (initialstate, key) => {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);

    return storedValue ? JSON.parse(storedValue) : initialstate; //we need to parse because we save data in the string format .
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
};

export default UseLocalStorageState;
