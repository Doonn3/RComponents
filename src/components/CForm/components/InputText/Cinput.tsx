import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import style from './cinput.module.css';
import IAccessCInputHandles from '../../interface/IAccessCInputHandles';
import CInputAccessType from '../../types/CInputAccessType';
import CInputPropsType from '../../types/CInputPropsType';

const CInput = forwardRef<IAccessCInputHandles<HTMLInputElement>, CInputPropsType>(
  (props: CInputPropsType, ref) => {
    const [access, setAccess] = useState<CInputAccessType>({
      accessText: 'Error',
      accessClassName: '',
    });

    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      GetchildRef: inputRef,
      accessTextError: (errorText?: string) => {
        setAccess({ accessText: errorText || 'Error', accessClassName: `${style.error}` });
      },
      accessTextSuccess: (successText?: string) => {
        setAccess({ accessText: successText || 'Success', accessClassName: `${style.on}` });
      },
      resetAccessText: () => {
        setAccess({ accessText: 'Error', accessClassName: '' });
        if (inputRef.current !== null) {
          inputRef.current.value = '';
        }
      },
    }));

    const handleFocus = () => {
      setAccess({ accessText: 'Error', accessClassName: '' });
    };

    return (
      <div className={style.content}>
        <input
          className={style.cinput}
          type={props.inputType}
          placeholder={props.placeholder || 'text'}
          ref={inputRef}
          onFocus={handleFocus}
        />
        <span className={`${style.access} ${access.accessClassName}`}>{access.accessText}</span>
      </div>
    );
  }
);

export default CInput;
