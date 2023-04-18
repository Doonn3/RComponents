import React, { useRef } from 'react';
import CInput from './components/InputText/Cinput';
import CInputFile from './components/InputFile/CInputFile';
import CInputCheckbox from './components/InputCheckbox/CInputCheckbox';
import style from './form.module.css';
import CInputSwitch from './components/InputSwitch/CInputSwitch';
import CInputOption from './components/InputOptions/COption';
import IAccessCInputHandles from './interface/IAccessCInputHandles';
import IRef from './interface/IRef';

export interface SuccessValidateProps {
  title: string;
  author: string;
  descriptions: string;
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

function CForm(props: CFormSuccessValidate) {
  const refAuthor = useRef<IAccessCInputHandles<HTMLInputElement>>(null);
  const refTitle = useRef<IAccessCInputHandles<HTMLInputElement>>(null);
  const refTags = useRef<IAccessCInputHandles<HTMLInputElement>>(null);
  const refDate = useRef<IAccessCInputHandles<HTMLInputElement>>(null);
  const refFile = useRef<IAccessCInputHandles<HTMLInputElement>>(null);

  const refOptions = useRef<IAccessCInputHandles<HTMLSelectElement>>(null);

  const refCheckbox = useRef<IRef<HTMLInputElement>>(null);
  const refSwitch = useRef<IAccessCInputHandles<HTMLInputElement>>(null);

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const vArr: string[] = [];

    const authorV = authorValidate(refAuthor.current?.GetchildRef);
    accessText(refAuthor, authorV.accessCode, authorV.text);

    const titleV = titleValidate(refTitle.current?.GetchildRef);
    accessText(refTitle, titleV.accessCode, titleV.text);

    const descriptionsV = descriptionsValidate(refTags.current?.GetchildRef);
    accessText(refTags, descriptionsV.accessCode, descriptionsV.text);

    const dateV = dateValidate(refDate.current?.GetchildRef);
    accessText(refDate, dateV.accessCode);

    const fileV = await fileValidate(refFile.current?.GetchildRef);
    accessText(refFile, fileV.accessCode);

    vArr.push(titleV.accessCode);
    vArr.push(authorV.accessCode);
    vArr.push(descriptionsV.accessCode);
    vArr.push(fileV.accessCode);
    vArr.push(dateV.accessCode);

    const findError = vArr.find((accessCode) => accessCode === 'Error');
    if (findError) {
      return;
    }

    const isDrakMode = refCheckbox.current?.GetchildRef.current?.checked;

    const data: SuccessValidateProps = {
      title: titleV.data as string,
      author: authorV.data as string,
      descriptions: descriptionsV.data as string,
      file: fileV.data as string,
      themeDarkMode: isDrakMode !== undefined ? isDrakMode : false,
    };

    alert('The data has been saved');
    if (props.successValidate) props.successValidate(data);
    resetForm();
  };

  function titleValidate(ref: React.RefObject<HTMLInputElement> | undefined): ValidateInfoType {
    if (ref === undefined) return { accessCode: 'Error' };
    if (ref.current === null) return { accessCode: 'Error' };
    if (ref.current === null) return { accessCode: 'Error' };

    const value = ref.current.value;

    if (value.length < 3) {
      return { accessCode: 'Error', text: 'Error: Enter min 3 chars' };
    }

    if (value[0] !== value[0].toUpperCase()) {
      return { accessCode: 'Error', text: 'Error: First char uppercase' };
    }

    return { accessCode: 'Success', data: value };
  }

  function authorValidate(ref: React.RefObject<HTMLInputElement> | undefined): ValidateInfoType {
    if (ref === undefined) return { accessCode: 'Error' };
    if (ref.current === null) return { accessCode: 'Error' };
    const arr: string[] = ref.current.value.split(' ');

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

    return { accessCode: 'Success', data: arr.join(' ') };
  }

  function descriptionsValidate(
    ref: React.RefObject<HTMLInputElement> | undefined
  ): ValidateInfoType {
    if (ref === undefined) return { accessCode: 'Error' };
    if (ref.current === null) return { accessCode: 'Error' };
    const val = ref.current.value;

    if (val.length < 3) return { accessCode: 'Error', text: 'Error: min 3 chars' };

    const result = val;

    return { accessCode: 'Success', data: result };
  }

  function dateValidate(ref: React.RefObject<HTMLInputElement> | undefined): ValidateInfoType {
    if (ref === undefined) return { accessCode: 'Error' };
    const date = ref.current?.value;
    if (date === undefined) return { accessCode: 'Error' };
    if (isNaN(Date.parse(date))) return { accessCode: 'Error' };
    return { accessCode: 'Success', data: date };
  }

  async function fileValidate(
    ref: React.RefObject<HTMLInputElement> | undefined
  ): Promise<ValidateInfoType> {
    if (ref === undefined) return { accessCode: 'Error' };
    const files = ref.current?.files;
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

  function accessText<T>(
    ref: React.RefObject<IAccessCInputHandles<T>>,
    accessText = 'Error',
    text?: string
  ) {
    if (ref.current === null) return;
    if (accessText === 'Error') {
      ref.current.accessTextError(text);
    } else if (accessText === 'Success') {
      ref.current?.accessTextSuccess(text);
    }
  }

  function resetForm(): void {
    const refs = [refAuthor, refTitle, refTags, refFile, refDate, refOptions, refSwitch];

    refs.forEach((ref) => {
      ref.current?.resetAccessText();
    });
  }

  return (
    <form className={style.form} action="submit" onSubmit={submit}>
      <div className={style.wrapper}>
        <section className={style.section}>
          <h1 className={style.title}>Required fields</h1>
          <label className={style.label}>
            <CInput inputType="text" placeholder="Author" ref={refAuthor} />
            <p className={style.help}>Author: Format (Alex Houdini)</p>
          </label>
          <label className={style.label}>
            <CInput inputType="text" placeholder="Card name" ref={refTitle} />
            <p className={style.help}>Card name: Format (First Card)</p>
          </label>
          <label className={style.label}>
            <CInput inputType="text" placeholder="Descriptions" ref={refTags} />
            <p className={style.help}>Tags: Example (design, photo, nature)</p>
          </label>
          <label className={style.label}>
            <CInput inputType="date" placeholder="Date" ref={refDate} />
            <p className={style.help}>In what period to publish the card</p>
          </label>
          <label className={style.label}>
            <CInputFile ref={refFile} />
          </label>
        </section>
        <section className={style.section}>
          <h1 className={style.title}>Card settings</h1>
          <label className={style.label}>
            <CInputOption ref={refOptions} />
            <p className={style.help}>What section will the map be in?</p>
          </label>
          <label className={style.label}>
            <CInputCheckbox ref={refCheckbox} />
            <p className={style.help}>Choosing a theme (light or dark)</p>
          </label>
          <label className={style.label}>
            <CInputSwitch ref={refSwitch} />
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

export default CForm;
