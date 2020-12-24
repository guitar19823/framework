import {useRef, useEffect} from 'react';
import { createPortal } from 'react-dom';
import Tooltip from '../Tooltip';
import {
  FaSearchMinus,
  FaSearchPlus,
} from "react-icons/fa";
import './index.css';

const portal = document.createElement('div');

const Resizer = ({ children, inParent, color = 'grey' }) => {
  const wrappedComponent = useRef();
  const size = useRef();

  useEffect(() => {
    const parentNode = document.getElementsByClassName(inParent)[0];
    parentNode.appendChild(portal);

    return () => parentNode.removeChild(portal);
  });

  const handleResize = delta => {
    const scale = ((+wrappedComponent.current.style.transform.replace(/[^0-9.-]+/g, "") || 1) + delta / 20).toFixed(2);
    
    if (scale <= 1 && scale >= 0.5) {
      size.current.innerText = `${Math.ceil(scale * 100)}%`;
      wrappedComponent.current.style.transform = `scale(${scale})`;
    }
  };

  return (
    <>
      {
        createPortal(
          <div className={`Resizer-${color}`}>
            <Tooltip side="top" title="Уменшить">
              <FaSearchMinus onClick={() => handleResize(-1)} />
            </Tooltip>
    
            <span className="size-persent" ref={size}>100%</span>
    
            <Tooltip side="top" title="Увеличить">
              <FaSearchPlus onClick={() => handleResize(1)} />
            </Tooltip>
          </div>,
          portal
        )
      }

      <div
        ref={wrappedComponent}
        className="Resizer-with-component"
      >
        {children}
      </div>
    </>
  );
};

export default Resizer;