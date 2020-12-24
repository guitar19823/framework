import './index.css';

const Tooltip = ({children, side, title}) => (
  <span className="Tooltip-wrapper">
    {children}
    
    <figure className={`Tooltip-${side || 'top'}`}>
      <span>{title}</span>
    </figure>
  </span>
);

export default Tooltip;