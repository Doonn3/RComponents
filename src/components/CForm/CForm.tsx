import React from 'react';
import CInput from './components/InputText/Cinput';
import CInputFile from './components/InputFile/CInputFile';
import CInputCheckbox from './components/InputCheckbox/CInputCheckbox';
import style from './form.module.css';
import CInputSwitch from './components/InputSwitch/CInputSwitch';
import CInputOption from './components/InputOptions/COption';

export interface SuccessValidateProps {
  title: string;
  author: string;
  tags: string[];
  file: string;
  themeDarkMode: boolean;
}

type ValidateInfoType = {
  accessCode: string;
  text?: string;
  data?: string | string[];
};

interface CFormSuccessValidate {
  successValidate?: (args: SuccessValidateProps) => void;
}

class CForm extends React.Component<CFormSuccessValidate> {
  private refTitle: React.RefObject<CInput> = React.createRef();
  private refAuthor: React.RefObject<CInput> = React.createRef();
  private refTags: React.RefObject<CInput> = React.createRef();
  private refDate: React.RefObject<CInput> = React.createRef();

  private refOptions: React.RefObject<CInputOption> = React.createRef();

  private refCheckbox: React.RefObject<CInputCheckbox> = React.createRef();
  private refSwitch: React.RefObject<CInputSwitch> = React.createRef();

  private refFile: React.RefObject<CInputFile> = React.createRef();

  constructor(props: CFormSuccessValidate) {
    super(props);
  }

  public render(): React.ReactNode {
    return (
      <form className={style.form} action="submit" onSubmit={this.submit}>
        <div className={style.wrapper}>
          <section className={style.section}>
            <h1 className={style.title}>Required fields</h1>
            <label className={style.label}>
              <CInput inputType="text" placeholder="Author" ref={this.refAuthor} />
              <p className={style.help}>Author: Format (Alex Houdini)</p>
            </label>
            <label className={style.label}>
              <CInput inputType="text" placeholder="Card name" ref={this.refTitle} />
              <p className={style.help}>Card name: Format (First Card)</p>
            </label>
            <label className={style.label}>
              <CInput inputType="text" placeholder="Tags" ref={this.refTags} />
              <p className={style.help}>Tags: Example (design, photo, nature)</p>
            </label>
            <label className={style.label}>
              <CInputFile ref={this.refFile} />
            </label>
          </section>
          <section className={style.section}>
            <h1 className={style.title}>Card settings</h1>
            <label className={style.label}>
              <CInputOption ref={this.refOptions} />
              <p className={style.help}>What section will the map be in?</p>
            </label>
            <label className={style.label}>
              <CInput inputType="date" placeholder="Date" ref={this.refDate} />
              <p className={style.help}>In what period to publish the card</p>
            </label>
            <label className={style.label}>
              <CInputCheckbox ref={this.refCheckbox} />
              <p className={style.help}>Choosing a theme (light or dark)</p>
            </label>
            <label className={style.label}>
              <CInputSwitch ref={this.refSwitch} />
              <p className={style.help}>Something there is not known why and where</p>
            </label>
          </section>
        </div>
        <button className={style.button} type="submit">
          Create Card
        </button>
      </form>
    );
  }

  private submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const vArr: string[] = [];

    const titleValidate = this.titleValidate(this.refTitle);
    this.accessText(this.refTitle, titleValidate.accessCode, titleValidate.text);

    const authorValidate = this.authorValidate(this.refAuthor);
    this.accessText(this.refAuthor, authorValidate.accessCode, authorValidate.text);

    const tagsValidate = this.tagsValidate(this.refTags);
    this.accessText(this.refTags, tagsValidate.accessCode, tagsValidate.text);

    const dateValidate = this.dateValidate(this.refDate);
    this.accessText(this.refDate, dateValidate.accessCode);

    const fileValidate = await this.fileValidate(this.refFile);
    this.accessText(this.refFile, fileValidate.accessCode);

    vArr.push(titleValidate.accessCode);
    vArr.push(authorValidate.accessCode);
    vArr.push(tagsValidate.accessCode);
    vArr.push(fileValidate.accessCode);
    vArr.push(dateValidate.accessCode);

    const findError = vArr.find((accessCode) => accessCode === 'Error');
    if (findError) {
      return;
    }

    const isDrakMode = this.refCheckbox.current?.InputRef.current?.checked;

    const data: SuccessValidateProps = {
      title: titleValidate.data as string,
      author: authorValidate.data as string,
      tags: tagsValidate.data as string[],
      file: fileValidate.data as string,
      themeDarkMode: isDrakMode !== undefined ? isDrakMode : false,
    };

    alert('The data has been saved');
    if (this.props.successValidate) this.props.successValidate(data);
    this.resetForm();
  };

  private titleValidate(ref: React.RefObject<CInput>): ValidateInfoType {
    if (ref.current === null) return { accessCode: 'Error' };
    if (ref.current.InputRef.current === null) return { accessCode: 'Error' };

    if (ref.current.InputRef.current.value.length < 3) {
      return { accessCode: 'Error', text: 'Error: Enter min 3 chars' };
    }

    const val = ref.current.InputRef.current.value;

    if (val[0] !== val[0].toUpperCase()) {
      return { accessCode: 'Error', text: 'Error: First char uppercase' };
    }

    return { accessCode: 'Success', data: val };
  }

  private authorValidate(ref: React.RefObject<CInput>): ValidateInfoType {
    if (ref.current === null) return { accessCode: 'Error' };
    if (ref.current.InputRef.current === null) return { accessCode: 'Error' };

    const arr: string[] = ref.current.InputRef.current.value.split(' ');

    if (arr.length < 2 || arr.length > 2) {
      return { accessCode: 'Error', text: 'Error: Enter Name and Surname' };
    }

    for (let i = 0; i < arr.length; i++) {
      const firstChar = arr[i][0];
      if (arr[i].length < 3)
        return { accessCode: 'Error', text: 'Error: Name min 3 chars and min 3 chars' };
      if (firstChar !== firstChar.toUpperCase()) {
        return { accessCode: 'Error', text: 'Errro: Name and Surname first char uppercase' };
      }
    }

    return { accessCode: 'Success', data: arr.join('') };
  }

  private tagsValidate(ref: React.RefObject<CInput>): ValidateInfoType {
    if (ref.current === null) return { accessCode: 'Error' };
    if (ref.current.InputRef.current === null) return { accessCode: 'Error' };
    const val = ref.current.InputRef.current.value;

    if (val.length < 3) return { accessCode: 'Error', text: 'Error: min 3 chars' };

    const result = val.split(',');

    return { accessCode: 'Success', data: result };
  }

  private dateValidate(ref: React.RefObject<CInput>): ValidateInfoType {
    const date = ref.current?.InputRef.current?.value;
    if (date === undefined) return { accessCode: 'Error' };
    if (isNaN(Date.parse(date))) return { accessCode: 'Error' };
    return { accessCode: 'Success', data: date };
  }

  private async fileValidate(ref: React.RefObject<CInputFile>): Promise<ValidateInfoType> {
    const files = ref.current?.InputRef.current?.files;
    if (files === null || files === undefined) return { accessCode: 'Error' };
    const file = files[0];
    if (file === undefined) return { accessCode: 'Error' };

    const reader = new FileReader();
    reader.readAsDataURL(file);

    function load(): Promise<string> {
      return new Promise((resolve) => {
        reader.onload = () => {
          resolve(reader.result as string);
        };
      });
    }

    const result = await load();
    return { accessCode: 'Success', data: result };
  }

  private accessText(
    ref: React.RefObject<CInput | CInputFile>,
    accessText = 'Error',
    text?: string
  ) {
    if (ref.current === null) return;
    if (accessText === 'Error') {
      ref.current?.accessTextError(text);
    } else if (accessText === 'Success') {
      ref.current?.accessTextSuccess(text);
    }
  }

  private resetForm(): void {
    const refs = [
      this.refAuthor,
      this.refTitle,
      this.refTags,
      this.refFile,
      this.refDate,
      this.refOptions,
      this.refSwitch,
    ];

    refs.forEach((ref) => {
      ref.current?.reset();
    });
  }
}

export default CForm;
