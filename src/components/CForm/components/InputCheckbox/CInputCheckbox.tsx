import React from 'react';
import './style.css';

class CInputCheckbox extends React.Component {
  private inputRef: React.RefObject<HTMLInputElement> = React.createRef();

  public get InputRef() {
    return this.inputRef;
  }

  render(): React.ReactNode {
    return (
      <div className="onoffswitch">
        <input
          id="myonoffswitch1"
          className="onoffswitch-checkbox"
          type="checkbox"
          ref={this.inputRef}
        />

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
  }
}

export default CInputCheckbox;
