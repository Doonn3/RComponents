import React from 'react';
import style from './cinput.module.css';
import IAccessCInput from '../../interface/IAccessCInput';
import CInputAccessType from '../../types/CInputAccessType';
import CInputPropsType from '../../types/CInputPropsType';

class CInput extends React.Component<CInputPropsType, CInputAccessType> implements IAccessCInput {
  private inputRef: React.RefObject<HTMLInputElement> = React.createRef();

  public get InputRef() {
    return this.inputRef;
  }

  constructor(props: CInputPropsType) {
    super(props);
    this.state = { accessText: 'Error', accessClassName: '' };
  }

  render(): React.ReactNode {
    const { inputType, placeholder } = this.props;

    return (
      <div className={style.content}>
        <input
          className={style.cinput}
          type={inputType}
          ref={this.inputRef}
          placeholder={placeholder || 'text'}
          onFocus={this.handleFocus}
        />
        <span className={`${style.access} ${this.state.accessClassName}`}>
          {this.state.accessText}
        </span>
      </div>
    );
  }

  private handleFocus = () => {
    this.resetAccessText();
  };

  public accessTextError(errorText?: string) {
    this.setState({ accessText: errorText || 'Error', accessClassName: `${style.error}` });
  }

  public accessTextSuccess(successText?: string) {
    this.setState({ accessText: successText || 'Success', accessClassName: `${style.on}` });
  }

  public resetAccessText() {
    this.setState({ accessText: 'Error', accessClassName: '' });
  }

  public reset = () => {
    if (this.inputRef.current !== null) this.inputRef.current.value = '';
    this.resetAccessText();
  };
}

export default CInput;
