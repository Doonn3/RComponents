import IRef from 'components/CForm/interface/IRef';
import IResetText from 'components/CForm/interface/IResetText';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import './style.css';

type RT = IRef<HTMLInputElement> & IResetText;

const CInputSwitch = forwardRef<RT, object>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    GetchildRef: inputRef,
    resetAccessText() {
      if (inputRef.current !== null) inputRef.current.checked = true;
    },
  }));

  return (
    <div className="container">
      <div className="selector">
        <div className="selecotr-item">
          <input
            id="radio1"
            className="selector-item__radio"
            type="radio"
            name="selector"
            defaultChecked
            ref={inputRef}
          />
          <label className="selector-item__label" htmlFor="radio1">
            There
          </label>
        </div>
        <div className="selecotr-item">
          <input id="radio2" className="selector-item_radio" type="radio" name="selector" />
          <label className="selector-item__label" htmlFor="radio2">
            Here
          </label>
        </div>
      </div>
    </div>
  );
});

export default CInputSwitch;
