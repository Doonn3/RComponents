import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import IAccessCInputHandles from '../../interface/IAccessCInputHandles';
import CInputAccessType from '../../types/CInputAccessType';
import CInputPropsType from '../../types/CInputPropsType';
import './style.css';

const CInputFile = forwardRef<IAccessCInputHandles<HTMLInputElement>, CInputPropsType>(
  (props, ref) => {
    const [access, setAccess] = useState<CInputAccessType>({
      accessText: 'or drag and drop files here',
      accessClassName: '',
    });
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      GetchildRef: inputRef,
      accessTextError: (errorText?: string) => {
        const defaultErrorText = 'you need to select an image';
        setAccess({ accessText: errorText || defaultErrorText, accessClassName: `error` });
      },
      accessTextSuccess: (successText?: string) => {
        const defaultAccessText = 'or drag and drop files here';
        setAccess({ accessText: successText || defaultAccessText, accessClassName: `` });
      },
      resetAccessText: () => {
        setAccess({ accessText: 'or drag and drop files here', accessClassName: '' });
      },
    }));

    const handleFocus = () => {
      setAccess({ accessText: 'or drag and drop files here', accessClassName: '' });
    };

    return (
      <div className="file-drop-area">
        <span className="fake-btn">Choose files</span>
        <span className={`file-msg ${access.accessClassName}`}>{access.accessText}</span>
        <input
          className="file-input"
          type="file"
          accept="image/png, image/jpeg"
          ref={inputRef}
          placeholder="file"
          onFocus={handleFocus}
        />
      </div>
    );
  }
);

export default CInputFile;
