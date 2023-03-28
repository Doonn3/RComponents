import React from 'react';
import style from './style.module.css';

interface IState {
  value: string;
}

class CInputOption extends React.Component<object, IState> {
  private inputRef: React.RefObject<HTMLInputElement> = React.createRef();

  public get InputRef() {
    return this.inputRef;
  }

  constructor(props = {}) {
    super(props);
    this.state = { value: 'photo' };
  }

  public render(): React.ReactNode {
    return (
      <select className={style.options} value={this.state.value} onChange={this.handleChange}>
        <option value="photo">Photo</option>
        <option value="nature">Nature</option>
        <option value="design">Design</option>
        <option value="illustration">Illustration</option>
      </select>
    );
  }

  private handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ value: event.target.value });
  };

  public reset = () => {
    this.setState({ value: 'photo' });
  };
}

export default CInputOption;
