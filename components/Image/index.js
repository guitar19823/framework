import noImage from './no_image.png';
import './index.css';

const Image = ({ src, width = 120, height = 90, radius = 0, bordered = false }) => (
  <div
    className={`Image${bordered ? ' Image-bordered' : ''}`}
    style={{width, height, borderRadius: `${radius}px`}}
  >
    {
      src ? (
        <img src={src} alt="" className="available-image" />
      ) : (
        <img src={noImage} alt="" className="no-image" />
      )
    }
  </div>
);

export default Image;