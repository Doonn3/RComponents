import { useState } from 'react';

const useInput = (valueInit: string) => {
  const [value, setValue] = useState(valueInit);
  const [isFocus, setFocus] = useState(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onFocus = () => {
    setFocus(true);
  };

  return {
    value,
    isFocus,
    onChange,
    onFocus,
  };
};

export default useInput;
