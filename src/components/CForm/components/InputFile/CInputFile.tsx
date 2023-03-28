import React from 'react';
import IAccessCInput from '../../interface/IAccessCInput';
import CInputAccessType from '../../types/CInputAccessType';
import CInputPropsType from '../../types/CInputPropsType';
import './style.css';

class CInputFile
  extends React.Component<CInputPropsType | object, CInputAccessType>
  implements IAccessCInput
{
  private inputRef: React.RefObject<HTMLInputElement> = React.createRef();

  public get InputRef() {
    return this.inputRef;
  }

  constructor(props: CInputPropsType | object = {}) {
    super(props);
    this.state = { accessText: 'or drag and drop files here', accessClassName: '' };
  }

  render(): React.ReactNode {
    return (
      <div className="file-drop-area">
        <span className="fake-btn">Choose files</span>
        <span className={`file-msg ${this.state.accessClassName}`}>{this.state.accessText}</span>
        <input
          className="file-input"
          type="file"
          accept="image/png, image/jpeg"
          ref={this.inputRef}
          placeholder="file"
          onFocus={this.handleFocus}
        />
      </div>
    );
  }

  private handleFocus = () => {
    this.resetAccessText();
  };

  public accessTextError(errorText?: string | undefined): void {
    const defaultErrorText = 'you need to select an image';
    this.setState({ accessText: errorText || defaultErrorText, accessClassName: 'error' });
  }
  public accessTextSuccess(successText?: string | undefined): void {
    const defaultAccessText = 'or drag and drop files here';
    this.setState({ accessText: successText || defaultAccessText, accessClassName: '' });
  }

  public resetAccessText() {
    this.setState({ accessText: 'or drag and drop files here', accessClassName: '' });
  }

  public reset(): void {
    if (this.inputRef.current !== null) this.inputRef.current.value = '';
    this.setState({ accessText: 'or drag and drop files here', accessClassName: '' });
  }
}

export default CInputFile;
