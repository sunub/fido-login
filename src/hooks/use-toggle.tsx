import React from "react";

function useToggle(initValue = false): [boolean, () => void] {
  const [toggle, setToggle] = React.useState(initValue);

  const executeToggle = React.useCallback(() => setToggle((v) => !v), []);

  return [toggle, executeToggle];
}

export default useToggle;
