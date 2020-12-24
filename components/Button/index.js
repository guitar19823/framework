import './index.css';

const Button = ({ value, type = 'button', disabled = false, color, onClick }) => (
  <input
    className={`Button ${color || ''}`}
    value={value}
    type={type}
    disabled={disabled}
    onClick={onClick}
  />
);

export default Button;