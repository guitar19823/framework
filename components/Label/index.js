import './index.css';

const Label = ({ children, textNode, side = 'top', style }) => (
  <label className={side} style={style}>
    <span>{textNode}</span>

    {children}
  </label>
);

export default Label;