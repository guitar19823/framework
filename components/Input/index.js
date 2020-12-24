import './index.css';

const Input = props => {
  const {
    className,
    type = 'text',
    value,
    defaultValue,
    name,
    min,
    max,
    placeholder,
    style,
    autoFocus = false,
    onChange,
    onBlur,
    onEnter = () => {},
  } = props;

  return (
    <input
      className={className}
      type={type}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      name={name}
      style={style}
      min={min}
      max={max}
      autoFocus={autoFocus}
      onChange={onChange}
      onBlur={onBlur}
      onKeyPress={e => e.code === 'Enter' && onEnter()}
    />
  );
};

export default Input;