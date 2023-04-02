import IRef from 'components/CForm/interface/IRef';
import IResetText from 'components/CForm/interface/IResetText';
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import style from './style.module.css';

type RT = IRef<HTMLSelectElement> & IResetText;

const CInputOption = forwardRef<RT, object>((props, ref) => {
  const [val, setValue] = useState<string>('photo');
  const inputRef = useRef<HTMLSelectElement>(null);

  useImperativeHandle(ref, () => ({
    GetchildRef: inputRef,
    resetAccessText: () => {
      setValue('photo');
    },
  }));

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  return (
    <select className={style.options} value={val} onChange={handleChange} ref={inputRef}>
      <option value="photo">Photo</option>
      <option value="nature">Nature</option>
      <option value="design">Design</option>
      <option value="illustration">Illustration</option>
    </select>
  );
});

export default CInputOption;
