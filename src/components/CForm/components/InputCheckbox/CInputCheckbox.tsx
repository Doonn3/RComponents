import IRef from 'components/CForm/interface/IRef';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import './style.css';

const CInputCheckbox = forwardRef<IRef<HTMLInputElement>, object>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    GetchildRef: inputRef,
  }));

  return (
    <div className="onoffswitch">
      <input id="myonoffswitch1" className="onoffswitch-checkbox" type="checkbox" ref={inputRef} />

      <label className="onoffswitch-label" htmlFor="myonoffswitch1">
        <div className="onoffswitch-inner">
          <div className="onoffswitch-active">
            <div className="onoffswitch-switch">Dark</div>
          </div>
          <div className="onoffswitch-inactive">
            <div className="onoffswitch-switch">Light</div>
          </div>
        </div>
      </label>
    </div>
  );
});

export default CInputCheckbox;
