import './index.css';

const Select = props => {
  const {
    name,
    defaultValue,
    options = [],
    autoFocus = false,
    onChange,
    onBlur,
    className,
    style,
  } = props;

  return (
    <select
      className={className}
      name={name}
      defaultValue={defaultValue}
      autoFocus={autoFocus}
      onChange={onChange}
      onBlur={onBlur}
      style={style}
    >
      {
        options.map(i => (
          <option
            key={i.value}
            value={i.value}
            selected={i.selected}
          >
            {i.title}
          </option>
        ))
      }
    </select>
  );
};

export default Select;