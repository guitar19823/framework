import './index.css';

const Toggle = ({ checked, onClick }) => {
  return (
    <div
      className={`Toggle${checked ? ' checked' : ''}`}
      onClick={onClick}
    ></div>
  );
};

export default Toggle;