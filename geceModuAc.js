import { useState } from 'react';

const useGeceModuAc = () => {
  const [geceModuAc, setGeceModuAc] = useState(false);

  const toggleGeceModu = () => {
    setGeceModuAc(prevState => !prevState);
  };

  return [geceModuAc, toggleGeceModu];
};

export default useGeceModuAc;