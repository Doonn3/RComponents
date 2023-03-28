import React from 'react';
import './style.css';

class CInputSwitch extends React.Component<object> {
  private inputRef: React.RefObject<HTMLInputElement> = React.createRef();

  public get InputRef() {
    return this.inputRef;
  }

  public constructor(props = {}) {
    super(props);
  }

  render(): React.ReactNode {
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
              ref={this.inputRef}
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
  }

  public reset(): void {
    if (this.inputRef.current !== null) this.inputRef.current.checked = true;
  }
}

export default CInputSwitch;
