import { FiDownload } from 'react-icons/fi';
import './index.css';

const InputFile = props => {
  const {
    name = 'files',
    multiple = false,
    accept = '',
    onChange,
    color = "grey",
  } = props;
  
  const randomString = (() => {
    const characters = "abcdefghijklmnopqrstuvwxyz_$";
    let string = '';
  
    for(let i = 0; i < 7; i++) {
      string += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    return `${string}_${Date.now()}`;
  }) ();

  return (
    <>
      <input
        id={randomString}
        type="file"
        name={name}
        multiple={multiple}
        accept={accept}
        onChange={onChange}
        className="InputFile"
      />

      <label className={`InputFile-label ${color}`} htmlFor={randomString}>
        <FiDownload />

        <span>Загрузить файл{multiple ? 'ы' : ''}</span>
      </label>
    </>
  );
}

export default InputFile;