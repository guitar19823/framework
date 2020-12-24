import './index.css';

const NavigationWindow = ({children, side}) => (
  <span className={`NavigationWindow ${side || 'left'}`}>
    {children[0]}
    
    <figure className="NavigationWindow-list">
      {children[1]}
    </figure>
  </span>
);

export default NavigationWindow;