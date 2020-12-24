import { useState } from 'react';
import { FiDownload, FiSave } from 'react-icons/fi';
import Image from '../Image';
import Tooltip from '../Tooltip';
import './index.css';

const DownloadImage = props => {
  const {
    width,
    height = 0,
    radius = 0,
    saveImage = () => {}
  } = props;

  const [file, setFile] = useState(null);

  const handleClick = async () => {
    await saveImage(file);

    setFile(null);
  };

  return (
    <div className="DownloadImage-wrapper" style={{width}}>
      <label className="DownloadImage" style={{height}}>
        <Image {...props} />

        <input
          type="file"
          accept=".jpg, .jpeg, .png"
          onChange={e => setFile(e.target.files[0])}
          name="image"
        />

        <div className="DownloadImage-icon" style={{borderRadius: `${radius}px`}}>
          <FiDownload />
        </div>
      </label>
      
      <div className="DownloadImage-footer">
        {
          file ? (
            <>
              <span className="DownloadImage-file-name">{file.name}</span>

              <Tooltip side="left" title="Сохранить">
                <FiSave
                  className="DownloadImage-button"
                  onClick={handleClick}
                />
              </Tooltip>
            </>
          ) : null
        }
      </div>
    </div>
  );
};

export default DownloadImage;