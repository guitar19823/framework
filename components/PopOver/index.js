import './index.css';

const PopOver = ({children, side}) => (
  <span className={`PopOver ${side || 'center'}`}>
    {children[0]}
    
    <figure className="PopOver-list">
      {children[1]}
    </figure>
  </span>
);

export default PopOver;