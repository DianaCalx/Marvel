import { useState } from 'react';

const useDebounce = () => {
  const [currentTimeout, setCurrentTimeout] = useState();
  return (func, duration = 1000) => {
    clearTimeout(currentTimeout);
    setCurrentTimeout(setTimeout(func, duration));
  }
}

export default useDebounce;

