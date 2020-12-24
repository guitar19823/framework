import './index.css';

const Avatar = ({ src, size }) => (
  <span className="Avatar" style={{width: size || 20, height: size || 20}}>
    <img src={src}  alt="" />
  </span>
);

export default Avatar;