import React from 'react';
import './style.css';

class CInputSwitch extends React.Component {
  private inputRef: React.RefObject<HTMLInputElement> = React.createRef();

  public get InputRef() {
    return this.inputRef;
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
            />
            <label className="selector-item__label" htmlFor="radio1">
              radio 1
            </label>
          </div>
          <div className="selecotr-item">
            <input id="radio2" className="selector-item_radio" type="radio" name="selector" />
            <label className="selector-item__label" htmlFor="radio2">
              radio 2
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default CInputSwitch;
