import { useEffect, useState } from 'react';
import './index.css';

const Sidebar = props => {
  const {
    children,
    side = 'right',
    show = false,
  } = props;

  let [ showSidebar, setHowSidebar ] = useState(show);

  useEffect(() => {
    let t;

    if (!show) {
      t = setTimeout(() => {
        setHowSidebar(show)
      }, 250);
    } else {
      setHowSidebar(show);
    }

    return () => {
      clearTimeout(t);
    }
  }, [show])

  return (
    <div className={`Sidebar${show ? ' show-sidebar' : ''}`}>
      <div className={`Sidebar-wrapped-component-${side}`}>
        {children[0]}
      </div>

      <div className={`Sidebar-${side}`}>
        {showSidebar ? children[1] : null}
      </div>
    </div>
  );
};

export default Sidebar;